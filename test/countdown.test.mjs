import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createServer } from 'node:http';
import { test } from 'node:test';
import next from 'next';

test('the production countdown API returns the documented status fields', async (t) => {
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
  assert.equal(typeof status.status, 'string');
  assert.match(status.lastUpdated, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(typeof status.progress.description, 'string');
  assert.ok(Object.hasOwn(status, 'deadline'));
  assert.ok(Object.hasOwn(status, 'timeRemaining'));
  assert.ok(Object.hasOwn(status, 'nextDeadline'));
});
