const Address = require("../../models/Address.js");

const addAddress = async (req, res) => {
  try {
    const { userId, address, pincode, city, phone, notes } = req.body;

    if (!userId || !address || !pincode || !city || !phone || !notes) {
      return res.status(400).json({
        success: false,
        message: "Invalid Data Provided",
      });
    }
    const newlyCreatedAddress = new Address({
      userId,
      address,
      city,
      phone,
      pincode,
      notes,
    });

    await newlyCreatedAddress.save();

    res.status(200).json({
      success: true,
      data: newlyCreatedAddress,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const fetchAllAddress = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "UserId Is required",
      });
    }

    const addressList = await Address.find({ userId });

    res.status(200).json({
      success: true,
      data: addressList,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const editAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;
    const formData = req.body;
    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        message: "User and address Id are required",
      });
    }

    const address = await Address.findByIdAndUpdate(
      {
        _id: addressId,
        userId,
      },
      formData,
      { new: true }
    );

    if (!address) {
      res.status(400).json({
        success: false,
        message: "Address not found",
      });
    }

    res.status(200).json({
      success: true,
      message: address,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const { userId, addressId } = req.params;
    if (!userId || !addressId) {
      return res.status(400).json({
        success: false,
        message: "User and address Id are required",
      });
    }

    const address = await Address.findOneAndDelete({
      _id: addressId,
      userId,
    });

    if (!address) {
      res.status(400).json({
        success: false,
        message: "Address not found",
      });
    }

    res.status(200).json({
        success:true,
         message:"Address deleted Sucessfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occured",
    });
  }
};

module.exports = { addAddress, deleteAddress, editAddress, fetchAllAddress };
