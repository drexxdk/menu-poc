import { Switch as HeadlessUiSwitch } from "@headlessui/react";

const Switch = ({
  isEnabled,
  onChange,
}: {
  isEnabled: boolean;
  onChange: (isEnabled: boolean) => void;
}) => {
  return (
    <HeadlessUiSwitch
      checked={isEnabled}
      onChange={(checked) => {
        onChange(checked);
      }}
      className={`${
        isEnabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isEnabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </HeadlessUiSwitch>
  );
};
export default Switch;
