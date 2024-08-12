export default function Auth(req, res, next){
    if (req.query.id > 20 || req.query.id < 0){
        res.status(401).json({
            message: "You are not authorized to access this page"
        })
    } else {
        next()
    }
}