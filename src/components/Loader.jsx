import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center">
      {progress}% Landing
    </Html>
  );
}

export default Loader;
