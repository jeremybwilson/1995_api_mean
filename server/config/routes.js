const NineteenNinetyFiveController = require('../controllers/persons');

module.exports = function(app){
    //routes and controllers
    app.get('/', NineteenNinetyFiveController.index);
    // app.get('/', (request, response) => {});

    // create user route
    app.get('/new/:name', NineteenNinetyFiveController.create);
    // app.get('/new/:name', (request, response) => {});

    // delete user route
    app.get('/remove/:name', NineteenNinetyFiveController.destroy);
    // app.get('/remove/:name', (request, response) => {});

    // show all users route
    app.get('/:name', NineteenNinetyFiveController.show);
    // app.get('/:name', (request, response) => {});

    // catch 404 and forward to error handler
    app.use((request, response, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    
    // error handler
    app.use((err, request, response, next) => {
        // set locals, only providing error in development
        response.locals.message = err.message;
        response.locals.error = request.app.get('env') === 'development' ? err : {};
        response.status(err.status || 500);
        // render the error page
        response.render('error', {title: 'Error page'});
      });
};