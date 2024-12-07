import { AdminLogin } from "@/lib/serverActions/authenticationAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-green-500">
      <div className="w-full max-w-md p-8 border border-green-500 rounded-md shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-center tracking-widest animate-pulse">
          ADMIN LOGIN
        </h1>
        <form action={AdminLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold uppercase"
            >
              Email
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border-green-500 text-green-500 placeholder-green-400 focus:ring-0 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold uppercase"
            >
              Password
            </label>
            <Input
              type="password"
              name="password"
              id="password"
              className="w-full bg-transparent border-green-500 text-green-500 placeholder-green-400 focus:ring-0 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-green-500 text-black hover:bg-green-600 focus:ring focus:ring-green-300"
          >
            Login
          </Button>
        </form>
        <p className="mt-6 text-xs text-center text-green-400">
          Authorized personnel only. Attempted breach will be logged.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
