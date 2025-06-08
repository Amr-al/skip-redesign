import {
  LocationMarkerIcon,
  TrashIcon,
  TruckIcon,
  ShieldCheckIcon,
  CalendarIcon,
  CreditCardIcon,
} from "@heroicons/react/solid";

const steps = [
  { icon: LocationMarkerIcon, label: "Postcode" },
  { icon: TrashIcon, label: "Waste Type" },
  { icon: TruckIcon, label: "Select Skip" },
  { icon: ShieldCheckIcon, label: "Permit Check" },
  { icon: CalendarIcon, label: "Choose Date" },
  { icon: CreditCardIcon, label: "Payment" },
];

const Stepper = ({ currentStep = 2 }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center gap-4 p-4 whitespace-nowrap min-w-max">
        {steps.map((step, index) => {
          const isActive = index <= currentStep;
          const isCurrent = index === currentStep;
          const Icon = step.icon;

          return (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1 ${
                  isActive ? "text-white" : "text-black"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span
                  className={`text-sm ${
                    isCurrent ? "text-white font-bold" : "text-[#FFFFCC] opacity-80"
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Line separator between steps */}
              {index < steps.length - 1 && (
                <div
                  className={`w-6 h-px ${
                    isActive ? "bg-white" : "bg-[#FFFFCC]"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
