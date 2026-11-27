import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { test } from 'node:test';
import next from 'next';

test('the production countdown API reports an inactive deadline', async (t) => {
  const hostname = '127.0.0.1';
  const app = next({ dev: false, hostname });
  t.after(() => app.close());
  await app.prepare();

  const server = createServer(app.getRequestHandler());
  t.after(() => server[Symbol.asyncDispose]());
  server.listen(0, hostname);
  await once(server, 'listening');

  const response = await fetch(`http://${hostname}:${server.address().port}/api/countdown`, {
    signal: AbortSignal.timeout(5_000),
  });

  assert.equal(response.status, 200);
  const status = await response.json();
  assert.equal(status.status, 'inactive');
  assert.equal(status.deadline, null);
  assert.equal(status.timeRemaining, null);
  assert.equal(status.nextDeadline, null);
  assert.deepEqual(status.progress, {
    percentage: null,
    description: 'There is no announced nationwide ban deadline.',
  });
  assert.match(status.lastUpdated, /^\d{4}-\d{2}-\d{2}$/);

  const invalidMethod = await fetch(`http://${hostname}:${server.address().port}/api/countdown`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ deadline: 'not-a-date' }),
    signal: AbortSignal.timeout(5_000),
  });
  assert.equal(invalidMethod.status, 405);
  assert.equal(invalidMethod.headers.get('allow'), 'GET');
  assert.deepEqual(await invalidMethod.json(), { error: 'Method not allowed' });
});
