/* 需要使用后端nodejs的commonjs规范 */

module.exports = (req, res, next) => {
    if(req.method === 'POST' && req.path === '/login') {
        if(req.body.username === 'yang' && req.body.password === '1111') {
            return res.status(200).json({
                user: {
                    token: '123'
                }
            })
        } else {
            return res.status(400).json({message: 'wrong username or password'})
        }
    }
    next()
}