"use client";


interface CircularProgressProps {
  value: number;
  color: string;
}

export const CircularProgress = ({value, color}: CircularProgressProps) => {
    const radius = 42;
    const circumference = 2 * Math.PI * radius;

    const offset =
        circumference -
        (value / 100) * circumference;

    return (
        <div className="relative h-16 w-16">
            <svg
                className="-rotate-90"
                viewBox="0 0 100 100"
            >
                <circle
                cx="50"
                cy="50"
                r={radius}
                strokeWidth="6"
                fill="transparent"
                className="stroke-white/10"
                />

                <circle
                cx="50"
                cy="50"
                r={radius}
                strokeWidth="6"
                fill="transparent"
                stroke={color}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                {value}%
            </div>
        </div>
    );
}