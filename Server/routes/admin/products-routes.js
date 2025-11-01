const express =require('express')

const {handleImageUpload,addProduct,fetchAllProducts,deleteProduct,editProduct} =require('../../controllers/admin/product-controller.js')

const {upload} =require('../../helpers/cloudinary.js')

const router =express.Router();


router.post('/upload-image',upload.single("my_file"),handleImageUpload)
router.post('/add',addProduct)
router.put('/edit/:id',editProduct)
router.delete('/delete/:id',deleteProduct)
router.get('/add',fetchAllProducts)

module.exports = router;