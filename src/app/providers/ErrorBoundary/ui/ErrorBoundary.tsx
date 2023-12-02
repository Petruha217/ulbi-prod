import React, { ReactNode, Suspense } from 'react'
import { ErrorPage } from 'widgets/ErrorPage'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error: Error, errorInfo: React.ErrorInfo): void {
    if (error) {
      console.log(error, errorInfo)
      this.setState({
        hasError: true
      })
    }
  }

  render (): React.ReactNode {
    if (this.state.hasError) {
      return (
        <Suspense fallback=''>
          <ErrorPage/>
        </Suspense>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
