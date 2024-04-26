import { Button } from '@expo/styleguide';
import { useRouter } from 'next/router';
import React from 'react';

import ExampleText from './example.mdx';

type Props = {
  // props
};

// TODO:
// Add Radio and RadioGroup to components/Form
// Add a component(s)? for the check lists on the set up your environment doc
// Write a segement controller that can choose between the different types of build environments  (http://localhost:3002/guides/local-app-development/)

export function Example(props: Props) {
  const router = useRouter();
  const { query } = router;

  //   device=physical&platform=android&mode=development&buildEnv=local

  function addQueryParam() {
    const newQuery = {
      ...query,
      testParam: 'testValue',
    };

    router.replace({
      query: newQuery,
    });
  }

  return (
    <div className="bg-element p-4">
      <ExampleText />
      <Button onClick={() => addQueryParam()}>addQueryParam</Button>
    </div>
  );
}
