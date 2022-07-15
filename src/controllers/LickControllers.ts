import { Request, Response } from "express";
import model from "../model/Lick";

class LickController {
  public async lickAll(_: Request, res: Response): Promise<Response> {
    const listLick = await model.find();
    return res.status(200).json({ listLick });
  }
  public async lickCreate(req: Request, res: Response): Promise<Response> {
    const lickDoc = await model.insertMany(req.body);
    return res.status(200).json({ lickDoc });
  }

  public async lickUpdate(req: Request, res: Response): Promise<Response> {
    let id = req.params.id;
    let lick = req.body.lick;
    let name = req.body.name;
    let click = req.body.click;

    const lickDoc = await model.updateOne({
      _id: id,
      $set: { lick, name, click },
    });
    return res.status(200).json({ lickDoc });
  }
  public async lickDelete(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    await model.deleteOne({ _id: id });
    return res.status(200).json({ message: "deleted" });
  }
}

export default new LickController();
