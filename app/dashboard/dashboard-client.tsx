"use client";

import { signOut } from "@/lib/actions/auth-actions";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  IconCircleCheck,
  IconUser,
  IconLock,
  IconArrowLeft,
  IconSettings,
} from "@tabler/icons-react";

type Session = typeof auth.$Infer.Session;

export default function DashboardClientPage({ session }: { session: Session }) {
  const router = useRouter();
  const user = session.user;

  const handleSignOut = async () => {
    await signOut();
    router.push("/signin");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-20">
        <div className="px-4 py-6 sm:px-0">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-2xl">
                    Welcome to Your Dashboard!
                  </CardTitle>
                  <CardDescription className="mt-2">
                    Manage your account and explore better-auth features
                  </CardDescription>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                        alt={user.name}
                      />
                      <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Authentication Status */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">
                    Authentication Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-blue-700">Status:</span>
                      <Badge
                        variant="default"
                        className="bg-green-100 text-green-800 hover:bg-green-100"
                      >
                        Authenticated
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-blue-700">
                        Provider:
                      </span>
                      <span className="text-blue-600">Better-Auth</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-blue-700">
                        User ID:
                      </span>
                      <span className="text-blue-600 truncate max-w-50">
                        {user.id}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-blue-700">
                        Email Verified:
                      </span>
                      <span className="text-blue-600">
                        {user.emailVerified ? "Yes" : "No"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                      <IconCircleCheck
                        className="w-6 h-6 text-indigo-600"
                        stroke={1.5}
                      />
                    </div>
                    <CardTitle className="text-lg">Social Login</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Seamlessly authenticate with Google, GitHub, and other
                      social providers.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <IconUser
                        className="w-6 h-6 text-green-600"
                        stroke={1.5}
                      />
                    </div>
                    <CardTitle className="text-lg">User Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Manage user accounts, profiles, and authentication
                      settings.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                      <IconLock
                        className="w-6 h-6 text-purple-600"
                        stroke={1.5}
                      />
                    </div>
                    <CardTitle className="text-lg">Secure Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Protected routes and secure authentication flow with
                      better-auth.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              {/* Demo Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Try These Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => alert("Mock action: Profile updated!")}
                    >
                      Update Profile
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => alert("Mock action: Settings saved!")}
                    >
                      Save Settings
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => alert("Mock action: Data exported!")}
                    >
                      Export Data
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div>
                <Separator className="mb-6" />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline">
                    <Link href="/" className="flex justify-center items-center">
                      <IconArrowLeft className="w-4 h-4 mr-2" stroke={1.5} />
                      <span>Back to Home</span>
                    </Link>
                  </Button>
                  <Button>
                    <Link href="/" className="flex justify-center items-center">
                      <IconSettings className="w-4 h-4 mr-2" stroke={1.5} />
                      <span>Manage Account</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
