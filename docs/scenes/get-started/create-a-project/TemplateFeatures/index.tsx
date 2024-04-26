import { Button, ButtonBase, mergeClasses } from '@expo/styleguide';
import { ArrowRightIcon } from '@expo/styleguide-icons';
import { useState } from 'react';

import { CALLOUT, CODE, HEADLINE } from '~/ui/components/Text';

export function TemplateFeatures() {
  const [selected, setSelected] = useState('navigation');

  return (
    <div className="text-default rounded-md overflow-hidden border border-default">
      <div className="bg-subtle p-3 flex pl-4 border-b border-default">
        <HEADLINE>Default template</HEADLINE>
      </div>
      <div className="grid grid-cols-3">
        <div className="p-3 flex flex-col gap-2 col-span-1 border-r border-default">
          <ButtonBase
            onClick={() => setSelected('navigation')}
            className={mergeClasses(
              'p-3 rounded-md text-secondary hocus:bg-hover border border-transparent',
              selected === 'navigation' && 'bg-default border-default border shadow-xs text-default'
            )}>
            File-based routing
          </ButtonBase>
          <ButtonBase
            onClick={() => setSelected('platforms')}
            className={mergeClasses(
              'p-3 rounded-md text-secondary hocus:bg-hover border border-transparent',
              selected === 'platforms' && 'bg-default border-default border shadow-xs text-default'
            )}>
            Android, iOS, and Web support
          </ButtonBase>
          <ButtonBase
            onClick={() => setSelected('images')}
            className={mergeClasses(
              'p-3 rounded-md text-secondary hocus:bg-hover border border-transparent',
              selected === 'images' && 'bg-default border-default border shadow-xs text-default'
            )}>
            Images
          </ButtonBase>
          <ButtonBase
            onClick={() => setSelected('fonts')}
            className={mergeClasses(
              'p-3 rounded-md text-secondary hocus:bg-hover border border-transparent',
              selected === 'fonts' && 'bg-default border-default border shadow-xs text-default'
            )}>
            Custom fonts
          </ButtonBase>
          <ButtonBase
            onClick={() => setSelected('themes')}
            className={mergeClasses(
              'p-3 rounded-md text-secondary hocus:bg-hover border border-transparent',
              selected === 'themes' && 'bg-default border-default border shadow-xs text-default'
            )}>
            Light and dark mode
          </ButtonBase>
        </div>
        <div className="bg-default col-span-2">
          {selected === 'navigation' ? (
            <div>
              <div className="flex items-center justify-center bg-screen">
                <img src="/static/images/get-started/navigation.png" className="size-[300px]" />
              </div>
              <div className="flex flex-col gap-3 items-start p-6 border-t border-default bg-default">
                <div>
                  <HEADLINE>File-based routing</HEADLINE>
                  <CALLOUT theme="secondary">
                    The app has two screens: <strong>app/(tabs)/index.tsx</strong> and{' '}
                    <strong>app/(tabs)/explore.tsx</strong>. The layout file in{' '}
                    <strong>app/(tabs)/_layout.tsx</strong> sets up the tab navigator.
                  </CALLOUT>
                </div>
                <Button
                  href="/router/introduction"
                  rightSlot={<ArrowRightIcon />}
                  theme="secondary">
                  Learn more
                </Button>
              </div>
            </div>
          ) : null}
          {selected === 'themes' ? (
            <div>
              <div className="flex items-center justify-center bg-screen">
                <img src="/static/images/get-started/themes.png" className="size-[300px]" />
              </div>
              <div className="flex flex-col gap-3 items-start p-6 border-t border-default bg-default">
                <div>
                  <HEADLINE>Light and dark modes</HEADLINE>
                  <CALLOUT theme="secondary">
                    This template has light and dark mode support. The <CODE>useColorScheme()</CODE>{' '}
                    hook lets you inspect what the user's current color scheme is, so that you can
                    adjust UI colors accordingly.
                  </CALLOUT>
                </div>
                <Button
                  href="/router/introduction"
                  rightSlot={<ArrowRightIcon />}
                  theme="secondary">
                  Learn more
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

// - [Navigation](/router/introduction/)
// - [Themes](/develop/user-interface/color-themes)
// - [Animations](/develop/user-interface/animation/)
// - [Fonts](/develop/user-interface/fonts/)
// - [Images](/versions/latest/sdk/image/)
