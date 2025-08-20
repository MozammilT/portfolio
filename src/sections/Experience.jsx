import { Timeline } from "@/components/timeline";
import { experiences } from "../constants/index.js";

function Experience() {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
}

export default Experience;
