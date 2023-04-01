const ClientController=require('../Controllers/Client_controller')

module.exports=(app)=>{
    app.get('/api/Clients',ClientController.all)

    app.post('/api/Clients',ClientController.Create_Client)

    app.put('/api/Clients/:id',ClientController.Edit_Client)

    app.get('/api/Clients/:id',ClientController.Details_Client)

    app.delete('/api/Clients/:id',ClientController.Delete_Client)
}