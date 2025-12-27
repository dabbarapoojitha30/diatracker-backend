import express from "express";
import Support from "../models/Support.js";

const router = express.Router();

// -------------------- APPLY FOR SUPPORT --------------------
router.post("/apply", async (req, res) => {
    try {
        const { patientId, treatment, amount } = req.body;
        if (!patientId || !treatment || !amount) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const support = await Support.create({ patientId, treatment, amount });
        res.json({ message: "Applied", support });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// -------------------- GET ALL PENDING REQUESTS FOR SPONSORS --------------------
router.get("/requests", async (req, res) => {
    try {
        const requests = await Support.find({ status: "pending" }).populate("patientId", "name email");
        res.json(requests);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// -------------------- APPROVE REQUEST --------------------
router.post("/approve", async (req, res) => {
    try {
        const { requestId, sponsorId } = req.body;
        if (!requestId || !sponsorId) return res.status(400).json({ error: "Invalid request" });

        const updated = await Support.findByIdAndUpdate(
            requestId,
            { status: "approved", sponsorId },
            { new: true }
        ).populate("patientId", "name email");

        if (!updated) return res.status(404).json({ error: "Request not found" });

        res.json({ message: "Approved", support: updated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// -------------------- GET PATIENT STATUS --------------------
router.get("/status/:id", async (req, res) => {
    try {
        const data = await Support.find({ patientId: req.params.id });
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
