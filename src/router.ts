import express from "express";
import LickControllers from "./controllers/LickControllers";

const router = express.Router();

router.get("/lickAll", (req, res) => {
  LickControllers.lickAll(req, res);
});

router.post("/lick", (req, res) => {
  LickControllers.lickCreate(req, res);
});

router.put("/lickUpdate/:id", (req, res) => {
  LickControllers.lickUpdate(req, res);
});

router.delete("/lickDelete/:id", (req, res) => {
  LickControllers.lickDelete(req, res);
});

export default router;
