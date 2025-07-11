import { ReactNode } from 'react';

type HideProps = {
  children: ReactNode;
};

function Hide({ children }: HideProps) {
    const adminString = localStorage.getItem('admin');
    const isAdmin = adminString ? JSON.parse(adminString) : false;

    if (!isAdmin) return null;

    return <>{children}</>;
}

export default Hide;

