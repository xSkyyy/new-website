// ButterflyRedirect.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ButterflyRedirect: React.FC = () => {
  const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the desired URL
            window.location.href = 'https://bsky.app/profile/skylar.pet';
              }, []);

                return null; // No UI needed, just redirect
                };

                export default ButterflyRedirect;
                