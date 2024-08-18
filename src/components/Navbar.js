import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Button,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    Stack,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import logo from "../resources/logo.png"

const links = [
    {
        id: 1,
        links: [
            { id: 1, href: "/", title: "Home" },
            { id: 2, href: "#", title: "Partner" },
            { id: 3, href: "#", title: "Blogs" },
            { id: 4, href: "#", title: "Institutions" },
            { id: 5, href: "#", title: "Programs" },

        ],
    },
];

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Stack
            direction="row"
            className={`w-full h-16 px-6 flex items-center fixed z-50 top-0 bg-BgPrimary`}
        >
           <Stack className="w-1/3">
            <img className="w-40 h-auto" src={logo} alt="logo" />
           </Stack>
            <Stack direction="row" className="justify-evenly w-2/3">
                {links.map(({ id, links }) => {
                    return (
                        <div className="flex w-full justify-evenly" key={id}>
                            {links.map((link) => {
                                const isActive = window.location.pathname === link.href;
                                return (
                                    <div
                                        className="hidden xl:flex items-center font-semibold"
                                        key={link.id}
                                    >
                                        <a href={link.href}>
                                            <Text
                                                _hover={{
                                                    color: "brand.TextSecondary",
                                                }}
                                                color={
                                                    isActive
                                                        ? "brand.TextSecondary"
                                                        : "brand.TextPrimary"
                                                }
                                                className="text-lg font-bold "
                                            >
                                                {link.title}
                                            </Text>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
                <Button border="2px" variant={"solid"} size={"xl"} className="p-2">Partner Login</Button>

                <div className="xl:hidden">
                    <IconButton
                        aria-label="Toggle Mode"
                        className="px-0 flex justify-evenly w-1/3"
                        onClick={onOpen}
                    >
                        <HamburgerIcon color="brand.TextPrimary" />
                    </IconButton>
                </div>
            </Stack>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <Stack direction="column" className="mt-20">
                        {links.map(({ id, links }) => {
                            return (
                                <div key={id}>
                                    {links.map((link) => {
                                        const isActive = window.location.pathname === link.href;
                                        return (
                                            <a href={link.href} key={link.href}>
                                                <Text
                                                    _hover={{
                                                        color: "brand.TextSecondary",
                                                    }}
                                                    className="p-5 flex items-center text-xl"
                                                    color={
                                                        isActive
                                                            ? "brand.TextSecondary"
                                                            : "brand.TextPrimary"
                                                    }
                                                >
                                                    {link.title}
                                                </Text>
                                            </a>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </Stack>
                </DrawerContent>
            </Drawer>
        </Stack>
    );
}

export default Navbar;
