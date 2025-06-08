import {
  LocationMarkerIcon ,
  TrashIcon,
  TruckIcon,
  ShieldCheckIcon,
  CalendarIcon ,
  CreditCardIcon,
} from "@heroicons/react/solid";

const steps = [
  { icon: LocationMarkerIcon , label: "Postcode" },
  { icon: TrashIcon, label: "Waste Type" },
  { icon: TruckIcon, label: "Select Skip" },
  { icon: ShieldCheckIcon, label: "Permit Check" },
  { icon: CalendarIcon , label: "Choose Date" },
  { icon: CreditCardIcon, label: "Payment" },
];

const Stepper = ({ currentStep = 2 }) => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 rounded-md">
      {steps.map((step, index) => {
        const isActive = index <= currentStep;
        const isCurrent = index === currentStep;
        const Icon = step.icon;

        return (
          <div key={index} className="flex items-center gap-2 cursor-pointer">
            <div className={`flex items-center gap-1 ${isActive ? "text-white" : "text-black"}`}>
              <Icon className="h-5 w-5" />
              <span className={`text-sm ${isCurrent ? "text-white font-bold" : "text-[#FFFFCC] opacity-80"}`}>
                {step.label}
              </span>
            </div>

            {/* Render line unless last step */}
            {index < steps.length - 1 && (
              <div className={`w-6 h-px ${isActive ? "bg-white" : "bg-[#FFFFCC] "}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
