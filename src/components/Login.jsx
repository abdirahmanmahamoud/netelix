import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/Firebase";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const userCreadentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/browse");
      console.log(userCreadentials);
    } catch (err) {
      toast.error("email or password is incorrect");
    }
  };
  return (
    <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <img
        src="./images/misc/home.jpeg"
        className="absolute -z-10  h-screen w-full object-cover opacity-60 sm:inline"
      />
      <Link to="/">
        <img
          src="./images/logo/logo.svg"
          className="absolute left-2 top-0 w-[100px] object-contain md:w-[150px] "
        />
      </Link>
      <form
        className="relative mt-24 space-y-8 rounded bg-black/70 px-6 py-10 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="my-6 text-4xl font-semibold text-white">Sign In</h1>
        <label className="inline-block w-full">
          <input
            type="email"
            placeholder="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="pt-2 text-sm text-orange-500">
              Please enter valid email
            </p>
          )}
        </label>
        <label className="inline-block w-full">
          <input
            type="password"
            placeholder="password"
            className="form-control"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="pt-2 text-sm text-orange-500">
              Please enter valid password
            </p>
          )}
        </label>
        <button className="btn">Sign in</button>
        <div className="my-4 flex flex-row space-x-2">
          <p className="text-lg text-[#8d8d8d]">New to netflix ?</p>
          <Link className="hover:underline" to="/signup">
            Sign up now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
