import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: React.ReactNode;
  icon: LucideIcon;
  color: string;
}

export function ContactInfoCard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {
  return (
    <Card className="border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${color}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <div className="text-muted-foreground">
            {value}
          </div>
        </div>
      </div>
    </Card>
  );
}