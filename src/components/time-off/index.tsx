import type { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight, Calendar, Clock, Plane } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { timeOffRequests, userTimeOffBalance } from "~/data/mockData";
import { useWaveAnimation } from "~/hooks/useWaveAnimation";

export const TimeOff: FunctionComponent = () => {
  const { containerRef, getItemStyle, getItemClassName } = useWaveAnimation();

  const upcomingRequests = timeOffRequests
    .filter((r) => r.status === "approved" && r.startDate > new Date())
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime())
    .slice(0, 2);

  const pendingRequests = timeOffRequests.filter((r) => r.status === "pending");

  const totalDaysRemaining = userTimeOffBalance.reduce(
    (sum, balance) => sum + balance.remaining,
    0,
  );
  const vacationBalance = userTimeOffBalance.find((b) => b.type === "vacation");

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "vacation":
        return <Plane className="size-3 text-blue-600" />;
      case "sick":
        return <AlertCircle className="size-3 text-red-600" />;
      case "personal":
        return <Clock className="size-3 text-purple-600" />;
      default:
        return <Calendar className="size-3 text-gray-600" />;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-lg font-semibold">Time Off</CardTitle>
        <Link to="/time-off">
          <Button variant="outline" size="sm" className="h-8 gap-2">
            Manage
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent ref={containerRef} className="space-y-4">
        {/* Balance Overview */}
        <div
          className={getItemClassName("grid grid-cols-2 gap-3 text-center")}
          style={getItemStyle(0)}
        >
          <div className="space-y-1">
            <p className="text-lg font-bold text-primary">
              {totalDaysRemaining}
            </p>
            <p className="text-xs text-muted-foreground">Days Available</p>
          </div>
          <div className="space-y-1">
            <p className="text-lg font-bold text-orange-600">
              {pendingRequests.length}
            </p>
            <p className="text-xs text-muted-foreground">Pending</p>
          </div>
        </div>

        {/* Vacation Balance Progress */}
        {vacationBalance && (
          <div
            className={getItemClassName("space-y-2")}
            style={getItemStyle(1)}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <Plane className="size-3 text-blue-600" />
                Vacation Days
              </span>
              <span className="text-muted-foreground">
                {vacationBalance.remaining} / {vacationBalance.total}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{
                  width: `${(vacationBalance.used / vacationBalance.total) * 100}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Upcoming Time Off */}
        <div className={getItemClassName("space-y-3")} style={getItemStyle(2)}>
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-muted-foreground" />
            <h4 className="text-sm font-medium">Upcoming Time Off</h4>
          </div>

          {upcomingRequests.length > 0 ? (
            <div className="space-y-2">
              {upcomingRequests.map((request, index) => (
                <div
                  key={request.id}
                  className={getItemClassName(
                    "bg-muted/30 flex items-center justify-between rounded-lg p-2",
                  )}
                  style={getItemStyle(3 + index)}
                >
                  <div className="flex min-w-0 items-center gap-2">
                    {getTypeIcon(request.type)}
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium capitalize">
                        {request.type}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(request.startDate)} -{" "}
                        {formatDate(request.endDate)}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {request.totalDays}d
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={getItemClassName("py-4 text-center")}
              style={getItemStyle(3)}
            >
              <Calendar className="mx-auto mb-2 size-8 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">
                No upcoming time off
              </p>
            </div>
          )}
        </div>

        {/* Pending Requests Alert */}
        {pendingRequests.length > 0 && (
          <div
            className={getItemClassName("border-t pt-3")}
            style={getItemStyle(5)}
          >
            <div className="flex items-center gap-2 text-sm text-yellow-600">
              <Clock className="size-4" />
              <span>
                {pendingRequests.length} request
                {pendingRequests.length !== 1 ? "s" : ""} awaiting approval
              </span>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div
          className={getItemClassName("border-t pt-3")}
          style={getItemStyle(6)}
        >
          <Link to="/time-off" className="block">
            <Button
              variant="outline"
              size="sm"
              className="h-8 w-full justify-center gap-2"
            >
              <Plane className="size-3" />
              <span className="text-xs">Request Time Off</span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
