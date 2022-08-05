import React, { useEffect, useState } from "react";

import {
    VStack,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
    ChakraProvider
} from "@chakra-ui/react";

import ApplicationsIcon from "./icons/ApplicationsIcon";
import theme from "../theme/theme";
import sideMenuItems from "../../src/pages/mock-data"


const SideMenu = () => {
    const menuChildren = sideMenuItems.addAnAPI.children;
    return (
        <VStack
            alignItems="flex-start"
            bg='brand.pure.white'
            height={"full"}
            borderRight={"1px solid"}
            borderColor={"brand.neutral.400"}>
            <Accordion
                allowToggle
                paddingRight={"16px"}
                paddingLeft={"44px"}
                width={"full"}
                position={"relative"}
                top={"100px"}
                borderColor={"brand.pure.white"}>
                <AccordionItem
                    overflow={"hidden"}>
                    <AccordionButton
                        justifyContent="left"
                        alignItems="center"
                        borderRadius="32px"
                        minWidth="240px"
                        boxShadow="none"
                        _expanded={{ bg: "brand.primary.background", color: "brand.primary.500" }}
                        _active={{ bg: "brand.primary.background", color: "brand.primary.500" }}
                        _hover={{ bg: "brand.neutral.100", color: "brand.primary.700" }}
                        bg="brand.pure.white"
                        color="brand.neutral.700"
                        as={"span"}>
                        <ApplicationsIcon />
                        <Text
                            as={"span"}
                            textStyle="body-semibold"
                            _active={{ bg: "brand.primary.background", color: "brand.primary.700" }}
                            _selected={{ bg: "brand.primary.background", color: "brand.primary.700" }}
                            marginLeft={"20px"}
                        >
                            <Link href={`/dashboard/applications`}>Applications</Link>
                            <AccordionIcon width={"24px"} height={"24px"} marginLeft={"20px"} />
                        </Text>
                    </AccordionButton>
                    <VStack maxHeight={"200px"} overflow={"auto"} alignItems="left">
                        <AccordionPanel
                            data-testid={"accordion-stack-applications"}
                            bg={"brand.pure.white"}
                        >
                            {menuChildren?.map(menuChildren => (
                                <AccordionItem
                                    padding={"12px 16px"}
                                    borderStyle={"none"}
                                    position={"relative"}
                                    left={"50px"}
                                    key={menuChildren}
                                    minW="324px"
                                    overflow="hidden"
                                >
                                    <Link href={"#"}>
                                        <Text
                                            cursor={"pointer"}
                                            as={"span"}
                                            textStyle="body-semibold"
                                            color="brand.neutral.500"
                                            _hover={{ color: "brand.neutral.700" }}
                                            _active={{ color: "brand.primary.500" }}
                                        >
                                            {menuChildren}
                                        </Text>
                                    </Link>
                                </AccordionItem>
                            ))}
                        </AccordionPanel>
                    </VStack>
                </AccordionItem>

            </Accordion>
        </VStack >

    );
};

export default SideMenu;