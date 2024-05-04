import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { SelectCard } from './SelectCard';

export function DevelopmentModeForm() {
  const router = useRouter();
  const { query, isReady } = router;
  const [mode, setMode] = useState<'expo-go' | 'development-build' | null>(null);

  useEffect(
    function queryDidUpdate() {
      if (isReady) {
        if (query.mode) {
          setMode(query.mode as 'expo-go' | 'development-build');
        } else {
          setMode('expo-go');
        }
      }
    },
    [query.mode, isReady]
  );

  function onRadioChange(mode: 'expo-go' | 'development-build') {
    setMode(mode);

    router.push(
      {
        query: {
          ...query,
          mode,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <div className="flex flex-wrap gap-4">
      <SelectCard
        imgSrc="/static/images/get-started/expo-go.png"
        darkImgSrc="/static/images/get-started/expo-go-dark.png"
        title="Expo Go"
        alt="Expo Go"
        description="Try out app development in a limited sandbox without custom native modules. Great for testing out Expo quickly. Not intended for long-term projects."
        isSelected={mode === 'expo-go'}
        onClick={() => onRadioChange('expo-go')}
      />
      <SelectCard
        imgSrc="/static/images/get-started/development-build.png"
        darkImgSrc="/static/images/get-started/development-build-dark.png"
        title="Development build"
        alt="Development build"
        description="Adds developer tools to your app. Include native libraries. Great for production-level projects."
        isSelected={mode === 'development-build'}
        onClick={() => onRadioChange('development-build')}
      />
    </div>
  );
}
