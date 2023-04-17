import Lottie from "lottie-react";
import loading from "../../../public/loading.json";

const LoadingSpinner = () => {
  return (
    <div className="w-screen grid place-content-center">
      <Lottie animationData={loading} loop={true} />;
    </div>
  );
};

export default LoadingSpinner;
