import { Router } from "express";

const router = Router();

router.get("/",async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(411).json({message:"Something went wrong!!"})
    }
})

export const pageRouter = router;