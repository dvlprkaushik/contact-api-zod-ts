import chalk from "chalk";
import type { Application } from "express";

export const listener = (app: Application) => {
    const PORT = process.env.PORT;
  const URL = process.env.BASE_URL;
  try {
    app.listen(PORT, () =>
      console.log(chalk.bold.greenBright(`Server running on : ${URL}:${PORT}/`))
    );
  } catch (error) {
    console.log(chalk.bold.redBright(`Error running the server -> ${error}`));
  }
};