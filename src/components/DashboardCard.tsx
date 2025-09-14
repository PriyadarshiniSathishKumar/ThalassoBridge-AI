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
    care: "border-peach/30 bg-gradient-to-br from-peach/10 to-light-peach/10",
    urgent: "border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5",
    success: "border-peach/30 bg-gradient-to-br from-peach/10 to-peach/5"
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
            variant === "care" && "text-peach",
            variant === "urgent" && "text-destructive",
            variant === "success" && "text-peach",
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