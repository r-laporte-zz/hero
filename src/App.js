import "./App.css";
import SignupEmailUpdates from "./components/email-updates/signup";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api/signup";
    this.post("/", (schema, request) => {
    
      const params = JSON.parse(request.requestBody)
      const { firstName } = params;
      return firstName === "error" ? {
        "status": "error", 
        "message": "Invalid Subscription request."       
      } : {
        status: "success",
        message: "Thank you. You are now subscribed.",
      };
    });
  },
});

function App() {
  return (
    <div className="App">
      <SignupEmailUpdates />
    </div>
  );
}

export default App;
