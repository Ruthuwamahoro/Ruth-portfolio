import { v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export async function uploadImage(image: string): Promise<string> {
    try {
        const uploadImage = await cloudinary.uploader.upload(image, {
            folder: "my-projects-portfolio",
            resource_type: "image",
            transformation: [
                { width: 800, height: 800, crop: "limit" },
                { quality: "auto" },
                { fetch_format: "auto" }
            ]
        })

        return uploadImage.secure_url;
        
    } catch (error) {
        const err = error instanceof Error ? error.message : "Internal Server Error";
        return err;
    }
}