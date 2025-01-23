import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@/components/ui/menu";
import { Button, ButtonIcon } from "./ui/button";
import { CopyIcon, Icon, MenuIcon } from "./ui/icon";
import { copyToClipboard } from "@/utils/copy-to-clipboard";

type Props = {
  pageName: string;
};

const MoreButton = ({ pageName }: Props) => {
  return (
    <Menu
      offset={128}
      placement="left"
      trigger={({ ...triggerProps }) => {
        return (
          <Button {...triggerProps} size="sm">
            <ButtonIcon as={MenuIcon} />
          </Button>
        );
      }}
    >
      <MenuItem
        key="CopyToClipboard"
        textValue="Copy to clipboard"
        className="p-2 web:min-w-[294px] min-w-[225px]"
        onPress={() =>
          copyToClipboard(
            `simpleTodo://(authenticated)/(tabs)/${pageName.toLowerCase()}`
          )
        }
      >
        <Icon as={CopyIcon} size="sm" className="mr-2" />
        <MenuItemLabel size="sm">Copy to clipboard</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Orders" textValue="Orders" className="p-2">
        <MenuItemLabel size="sm">Orders</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Address Book" textValue="Address Book" className="p-2">
        <MenuItemLabel size="sm">Address Book</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem key="Earn & Redeem" textValue="Earn & Redeem" className="p-2">
        <MenuItemLabel size="sm">Earn & Redeem</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Coupons" textValue="Coupons" className="p-2">
        <MenuItemLabel size="sm">Coupons</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Help Center" textValue="Help Center" className="p-2">
        <MenuItemLabel size="sm">Help Center</MenuItemLabel>
      </MenuItem>
      <MenuSeparator />
      <MenuItem key="Logout" textValue="Logout" className="p-2">
        <MenuItemLabel size="sm">Logout</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
};

export default MoreButton;
