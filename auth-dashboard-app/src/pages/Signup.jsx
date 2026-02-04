import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.scss";

const Signup = () => {
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

            const userData = {
                name: data.name,
                email: data.email,
                password: data.password,
            };

            // save user
            login(userData);
            localStorage.setItem("user", JSON.stringify(userData));

            toast.success("Signup successful!");
            navigate("/dashboard");
        } catch (error) {
            toast.error("Signup failed");
        }
    };

    return (
        <div>
            <h2 className="auth-title">Signup</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p>{errors.name.message}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Min 6 chars" },
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}

                <button type="submit" className="auth-btn">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
