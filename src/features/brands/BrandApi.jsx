import API from '../../config/axios'; // ✅ Correct

export const fetchAllBrands=async()=>{
    try {
        const res=await axios.get("/brands")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}