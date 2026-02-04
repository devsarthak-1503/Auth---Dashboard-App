import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.scss";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // fake API delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const savedUser = JSON.parse(localStorage.getItem("user"));

            if (!savedUser) {
                toast.error("No user found. Please signup first.");
                return;
            }

            if (
                data.email === savedUser.email &&
                data.password === savedUser.password
            ) {
                login(savedUser);
                toast.success("Login successful!");
                navigate("/dashboard");
            } else {
                toast.error("Invalid credentials");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div>
            <h2 className="auth-title">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit" className="auth-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;
