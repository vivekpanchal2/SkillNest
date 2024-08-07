const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const option = { folder };

  if (height) {
    option.height = height;
  }
  if (quality) {
    option.quality = quality;
  }

  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, options);
    return result;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error.message);
    throw error; // Rethrow the error after logging it
  }
};
