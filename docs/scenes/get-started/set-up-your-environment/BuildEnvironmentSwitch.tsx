import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { Switch } from '~/ui/components/Switch';
import { CALLOUT, HEADLINE, P } from '~/ui/components/Text';

type Props = {
  type: 'android-studio' | 'xcode';
};

export function BuildEnvironmentSwitch({ type }: Props) {
  const router = useRouter();
  const { query, isReady } = router;
  const [buildEnv, setBuildEnv] = useState<'android-studio' | 'xcode' | null>(null);

  useEffect(
    function queryDidUpdate() {
      if (isReady) {
        if (query.buildEnv) {
          setBuildEnv(query.buildEnv as 'android-studio' | 'xcode');
        }
      }
    },
    [query.buildEnv, isReady]
  );

  function onSwitchChange(isOn: boolean) {
    if (isOn) {
      setBuildEnv(null);

      const _query = query;
      delete _query.buildEnv;
      router.push(
        {
          query: _query,
        },
        undefined,
        { shallow: true }
      );
    } else {
      setBuildEnv(type);

      router.push(
        {
          query: {
            ...query,
            buildEnv: type,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  }

  return (
    <div className="flex gap-3 items-start px-4 py-3 bg-subtle border border-default rounded-lg">
      <div className="mt-1">
        <Switch onChange={onSwitchChange} value={!buildEnv} />{' '}
      </div>
      <div>
        <HEADLINE>Build with Expo Application Services (EAS)</HEADLINE>
        <CALLOUT theme="secondary">
          {' '}
          EAS compiles your app in the cloud and produces a build that you can install on your
          device. Alternatively, you can compile your app on your own computer.
        </CALLOUT>
      </div>
    </div>
  );
}
