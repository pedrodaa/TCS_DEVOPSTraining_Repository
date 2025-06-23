exports.handler = async function(event: any) {
  console.log("Event:", JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};
