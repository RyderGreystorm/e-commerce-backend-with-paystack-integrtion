const router =  require('express').Router;
const paystack = require('paystack')(process.env.PAYSTACK_KEY);

router.post('/payment', (req, res)=>{
    paystack.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'ghc',
      })
        .then(function(error, body) {
             if(error){
                res.status(500).json(error);
             }else{
                res.status(200).json(body);
             }
          });
})