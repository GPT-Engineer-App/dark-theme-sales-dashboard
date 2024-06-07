import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://czxuclshfilmhwhdflhi.supabase.co/auth/v1/token?grant_type=password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6eHVjbHNoZmlsbWh3aGRmbGhpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNzcwODI4NywiZXhwIjoyMDMzMjg0Mjg3fQ.VB1qCPdQrc0pyFJ8tL6TY_BmNQWgZVH8_Zsn4sVGv5c",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        onLogin(data.access_token);
      } else {
        setError(data.error_description || "Login failed");
      }
    } catch (error) {
      setError("Login failed");
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Login</Button>
          {error && <Box color="red">{error}</Box>}
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
