import {
  Menu,
  MenuItem,
  MenuItemLabel,
  MenuSeparator,
} from "@/components/ui/menu";
import { Button, ButtonIcon } from "./ui/button";
import { MenuIcon } from "./ui/icon";
import { Badge, BadgeText } from "./ui/badge";

const MoreButton = () => {
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
          key="Membership"
          textValue="Membership"
          className="p-2 justify-between"
        >
          <MenuItemLabel size="sm">Membership</MenuItemLabel>
          <Badge action="success" className="rounded-full">
            <BadgeText className="text-2xs capitalize">Pro</BadgeText>
          </Badge>
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
