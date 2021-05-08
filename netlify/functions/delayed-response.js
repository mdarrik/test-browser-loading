import Timers from "timers-promises";
export async function handler() {
  await Timers.setTimeout(7000);
  return {
    statusCode: 200,
    body: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>This is the page response</title>
</head>
<body>
    <h1>This is the response page</h1>
    <a href="/">Click here to go back home.</a>
</body>
</html>`,
  };
}
