import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";


// nav list menu
const navListMenuItems = [
    {
        title: "Branding",
        href: "/service/branding",
    },
    {
        title: "E-Commerce",
        href:
            "/service/e-commerce",
    },
    {
        title: "Mobile App",
        href:
            "/service/mobile-app",
    },
];

function DropdownNav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, href }) => (
        <a href={href} key={title}>
            <MenuItem>
                <Typography variant="h6" color="" className="hidden mx-auto flex items-center justify-center text-primary-100 text-center">
                    {title}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="bold" className="font-bold text-white text-center">
                        <MenuItem className="text-white flex lg:rounded-full items-center justify-center">
                            Services{" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[6rem] lg:w-[36rem] grid-cols-6 gap-3 overflow-visible grid">
                    {/* <Card
                        color="blue"
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md"
                    >
                        <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
                    </Card> */}
                    <ul className="col-span-12 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            {/* <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
            </MenuItem> */}
            <ul className="ml-6 flex w-full flex-col gap-1 hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

export default DropdownNav