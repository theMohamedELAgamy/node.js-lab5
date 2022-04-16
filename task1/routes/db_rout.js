
    let db =require('../controllers/db_query')

module.exports=(app)=>{
    app.get('/all',db.all)
    app.post('/emp',db.create_emp)
    app.post('/delete',db.delete_emp)
    app.post('/update',db.update_emp)

}