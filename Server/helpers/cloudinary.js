const cloudinary =require('cloudinary').v2
const multer =require('multer');

cloudinary.config({
    cloud_name:'dt662dzii',
    api_key:'799528647665978',
    api_secret:'M0GeuKfLM19PmAt-_2lBJdbZClE'
})

const storage =new multer.memoryStorage();

async function imageUploadUtil(file){
    const result =await cloudinary.uploader.upload(file,{
        resource_type:'auto'
    })

    return result;
}

const upload = multer({storage})

module.exports = {upload,imageUploadUtil}