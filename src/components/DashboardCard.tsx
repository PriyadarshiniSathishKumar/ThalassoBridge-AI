import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: "default" | "care" | "urgent" | "success";
  className?: string;
}

const DashboardCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  variant = "default",
  className 
}: DashboardCardProps) => {
  const variantStyles = {
    default: "border-border",
    care: "border-primary/20 bg-gradient-to-br from-primary/5 to-medical-teal/5",
    urgent: "border-medical-amber/30 bg-gradient-to-br from-medical-amber/10 to-medical-amber/5",
    success: "border-medical-green/30 bg-gradient-to-br from-medical-green/10 to-medical-green/5"
  };

  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      variantStyles[variant],
      className
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className={cn(
            "p-2 rounded-md",
            variant === "care" && "text-primary",
            variant === "urgent" && "text-medical-amber",
            variant === "success" && "text-medical-green",
            variant === "default" && "text-muted-foreground"
          )}>
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;