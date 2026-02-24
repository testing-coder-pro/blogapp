import { SettingsIcon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center gap-1">
      <SettingsIcon className="animate-spin" />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingPage;
