import { PlainClientAPI } from 'contentful-management';
import { SidebarExtensionSDK } from '@contentful/app-sdk';
import { Button } from "@contentful/f36-button";
import { Stack } from "@contentful/f36-core";

interface SidebarProps {
  sdk: SidebarExtensionSDK;
  cma: PlainClientAPI;
}

async function triggerBuildHook() {
  try {
    await fetch(`${process.env.REACT_APP_NETLIFY_BUILD_HOOK}`, {
      method: "POST",
    });
  } catch (e) {
    console.log(e);
  }
}

const Sidebar = (props: SidebarProps) => {
  return (
    <Stack flexDirection="column" spacing="spacingM">
      <Button size="medium" isFullWidth onClick={triggerBuildHook}>
        Build Netlify Preview
      </Button>
      <Button size="medium" isFullWidth as="a" href={process.env.REACT_APP_NETLIFY_URL} target="_blank">
        Open Netlify
      </Button>
    </Stack>
  );
};

export default Sidebar;
