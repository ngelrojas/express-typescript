
class PingController{
    getMessage = async ()=>{
        return 'pong';
    } 
}

test('should return pong message', async ()=>{
    const controller = new PingController();
    const response = await controller.getMessage();
    expect(response).toBe('pong');
})
