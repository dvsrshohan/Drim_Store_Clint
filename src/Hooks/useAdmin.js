import React, { useEffect, useState } from 'react';

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setInAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://drim-store-server-dvsrshohan.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setInAdminLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading];
};

export default useAdmin;