// ─── Global crash guard ──────────────────────────────────────────────────
// Without these, one bad conversion (e.g. a heavy video → sticker job) or
// any unhandled promise rejection anywhere in the app can take the ENTIRE
// bot process down instead of just failing that one command. We log the
// error and keep the bot running.
process.on('unhandledRejection', (reason) => {
    console.error('⚠️ Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
    console.error('⚠️ Uncaught Exception:', err);
});

import handleIncomingMessage from './events/messageHandler.js';
import { startPairingServer } from './web/server.js';

(async () => {
    await startPairingServer(handleIncomingMessage);
})();
