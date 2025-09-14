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
    care: "border-pastel-blue/30 bg-gradient-to-br from-pastel-blue/10 to-pastel-teal/10",
    urgent: "border-pastel-pink/30 bg-gradient-to-br from-pastel-pink/10 to-pastel-pink/5",
    success: "border-pastel-green/30 bg-gradient-to-br from-pastel-green/10 to-pastel-green/5"
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
            variant === "care" && "text-pastel-blue",
            variant === "urgent" && "text-pastel-pink",
            variant === "success" && "text-pastel-green",
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