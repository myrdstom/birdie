import * as express from "express";
import { connection } from "../db/db";
import { COUNT_DISTINCT_QUERY } from "../helpers/queries";

export const moodController = express.Router();

interface IEventCount {
  count: number;
  event_type: string;
  length: number;
}

moodController.get("/mood/:id", (req, res) => {
  const { id } = req.params;
  const query = COUNT_DISTINCT_QUERY(id);

  connection.query(query, (err: any, rows: IEventCount) => {
    if (err) throw err;
    if (rows.length === 0) {
      return res.status(400).json({
        message: "Invalid Id: please review your inputs",
      });
    }
    return res.status(200).json({
      events: rows,
    });
  });
});
