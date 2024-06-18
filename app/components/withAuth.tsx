// src/components/withAuth.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const withAuth = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
  return (props: P) => {
    const { user } = useAuth();
    const router = useRouter();

    if (!user) {
      if (typeof window !== 'undefined') {
        router.replace('/login'); // Redirect to login page if not authenticated
      }
      return null;
    }
    else if (user && user.id)

    return <Component {...props} />;
  };
};

export default withAuth;
