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
} from "@chakra-ui/react";

import ApplicationsIcon from "./icons/ApplicationsIcon";
import theme from "../theme/theme";
import sideMenuItems from "../../src/pages/mock-data";

const accordionButtonStyle = {
    justifyContent: "left",
    alignItems: "center",
    borderRadius: "32px",
    minWidth: "240px",
    boxShadow: "none",
    backcgroundColor: "brand.pure.white",
    color: "brand.neutral.700",
}

const SideMenu = () => {
    const applicationsChildren = sideMenuItems.applications.children;
    const myAPIsChildren = sideMenuItems.addAnAPI.children;
    return (
        <VStack
            alignItems="flex-start"
            bg='brand.pure.white'
            height={"full"}
            borderRight={"1px solid"}
            borderColor={"brand.neutral.400"}
            >
            <Accordion
                allowToggle
                allowMultiple
                paddingRight={"16px"}
                paddingLeft={"16px"}
                width={"full"}
                position={"relative"}
                top={"32px"}
                borderColor={"brand.pure.white"}
                >
                <AccordionItem
                    overflow={"hidden"}
                    mb={2}>
                    <AccordionButton
                        as="span"
                        style={accordionButtonStyle}
                        _expanded={{ bg: "brand.primary.background", color: "brand.primary.500" }}
                        _active={{ bg: "brand.primary.background", color: "brand.primary.500" }}
                        _hover={{ bg: "brand.neutral.100", color: "brand.primary.700" }}
                    >
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
                            {applicationsChildren?.map(applicationsChild => (
                                <AccordionItem
                                    padding={"12px 16px"}
                                    borderStyle={"none"}
                                    position={"relative"}
                                    left={"50px"}
                                    key={applicationsChild}
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
                                            {applicationsChild}
                                        </Text>
                                    </Link>

                                </AccordionItem>
                            ))}

                        </AccordionPanel>
                    </VStack>
                </AccordionItem>
                <AccordionItem
                    overflow={"hidden"}>
                    <AccordionButton
                        as="span"
                        style={accordionButtonStyle}
                        _expanded={{ bg: "brand.primary.background", color: "brand.primary.500" }}
                        _active={{ bg: "brand.primary.background", color: "brand.primary.500" }}
                        _hover={{ bg: "brand.neutral.100", color: "brand.primary.700" }}>
                        <ApplicationsIcon />
                        <Text
                            as={"span"}
                            textStyle="body-semibold"
                            _active={{ bg: "brand.primary.background", color: "brand.primary.700" }}
                            _selected={{ bg: "brand.primary.background", color: "brand.primary.700" }}
                            marginLeft={"20px"}
                        >
                            <Link href={`/dashboard/applications`}>My APIs</Link>
                            <AccordionIcon width={"24px"} height={"24px"} marginLeft={"20px"} />
                        </Text>
                    </AccordionButton>
                    <VStack maxHeight={"200px"} overflow={"auto"} alignItems="left">
                        <AccordionPanel
                            data-testid={"accordion-stack-applications"}
                            bg={"brand.pure.white"}
                        >
                            {myAPIsChildren?.map(myAPIsChild => (
                                <AccordionItem
                                    padding={"12px 16px"}
                                    borderStyle={"none"}
                                    position={"relative"}
                                    left={"50px"}
                                    key={myAPIsChild}
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
                                            {myAPIsChild}
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