interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="relative">
      {/* Connection line for desktop */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300 -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="bg-azure-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
