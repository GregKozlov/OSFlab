/**
 * Create middleware to extract application specific information from the request and
 * put it into the state.
 *
 * @param {express.application} app The express application instance
 * @returns {[express.Middleware]}
 */
export default /*async*/ (/*app*/) => {
  return {
    /*async*/ setStateFromRequest(req, res, next) {
      /*
      //
      //  WARNING
      //
      //  This example is purely illustrative. You will need to decide the specifics on what
      //  is extracted from the request and when it need to be inserted into the state.
      //
      const {additionalState = []} = res.locals;

      // Extract something from the request
      const {someQueryParam} = req.query;

      // Push that into the state.
      additionalState.push({
        clientRepository: {
          context: {
            global: {
              someQueryParam
            }
          }
        }
      });
      */
      next();
    }
  };
};
