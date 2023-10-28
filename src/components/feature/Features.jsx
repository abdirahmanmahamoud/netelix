import featureData from "../../content/features.json";
import Featur from "./Featur";
const features = () => {
  return (
    <div>
      {featureData.map((feature) => (
        <Featur key={feature.alt} {...feature} />
      ))}
    </div>
  );
};

export default features;
