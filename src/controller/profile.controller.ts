import { Request, Response } from "express";
import ProfileModel from "../model/profile.model";

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const newuser = new ProfileModel(req.body);
    await newuser.save();
    res.status(201).json(newuser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const get = async (req: Request, res: Response): Promise<void> => {
  try {
    const profile = await ProfileModel.find();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const profile = await ProfileModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteById =  async (
  req:   Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await ProfileModel.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    
  }
  
};
