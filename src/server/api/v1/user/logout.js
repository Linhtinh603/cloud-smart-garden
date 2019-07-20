const router = require('express').Router();
const APIResponse = require('../../../models/api-models');
const Logger = require('../../../services/logger');

router.get('/', async (req, res) => {
  req.session.destroy(() => {
    try {
      return res.send(new APIResponse({ result: 'success' }));
    } catch (error) {
      Logger.error(error.message, { stackTrace: error.stack });
      return res.send(new APIResponse({ error: { message: error.message, stack: error.stack } }));
    }
  });
});

module.exports = router;
