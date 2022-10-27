const express = require('express');
const router = express.Router();


router.get('/details', (req, res) => {
    const data = {
        "message": "HNG Internship ",
        "status": "success",
        "data": {
            "name": "Akindele Simeon",
            "github": "@Apex184",
            "email": "akindeleapex@gmail.com",
            "mobile": "08165275980",
            "twitter": "@akindele_simeon"
        }
    }
    res.status(200).json(data);
    
   
})

module.exports = router;
