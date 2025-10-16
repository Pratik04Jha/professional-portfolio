'use client'

import { useEffect } from 'react'
import { AlertCircle, RotateCcw } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <Card className="w-full max-w-2xl bg-[#111]/50 py-8">
        <CardHeader className="space-y-5">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-8 w-8" />
            <CardTitle className="text-2xl font-semibold">Error Occurred</CardTitle>
          </div>
          <CardDescription className="text-base">
            An unexpected error has occurred while processing your request. Our team has been notified and is working to resolve the issue.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <Separator />
          
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Technical Details</AlertTitle>
            <AlertDescription className="mt-2 font-mono text-sm break-all">
              {error?.message || 'An unknown error occurred'}
            </AlertDescription>
          </Alert>
        </CardContent>

        <CardFooter className="flex gap-3">
          <Button onClick={() => reset()} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Try Again
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            Go to Homepage
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}