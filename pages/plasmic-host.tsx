
import * as React from 'react';
import Script from 'next/script';
import { PlasmicCanvasHost, registerComponent, GlobalContextMeta } from '@plasmicapp/host';
import { PLASMIC } from '../plasmic-init';

import registerGlobalContext from "@plasmicapp/host/registerGlobalContext";

import { registerAspectRatio } from "../components/registerAspectRatio";
import { registerBadge } from "../components/registerBadge";
import {
  registerBreadcrumb,
  registerBreadcrumbItem,
  registerBreadcrumbLink,
  registerBreadcrumbSeparator,
} from "../components/registerBreadcrumb";
import { buttonGroupMeta, buttonMeta, registerButton, registerButtonGroup} from "../components/registerButton";
import { registerCheckbox, registerCheckboxGroup } from "../components/registerCheckBox";
import { registerCode } from "../components/registerCode";
import { registerDivider } from "../components/registerDivider";
import { registerImage } from "../components/registerImage";
import { registerInput,registerInputGroup,registerInputLeftElement } from "../components/registerInput";
import { registerKbd } from "../components/registerKbd";
import {
  registerNumberDecrementStepper,
  registerNumberIncrementStepper,
  registerNumberInput,
  registerNumberInputField,
  registerNumberInputStepper,
} from "../components/registerNumberInput";
import { registerPinInput, registerPinInputField } from "../components/registerPinInput";
import {
  registerPopover,
  registerPopoverArrow,
  registerPopoverBody,
  registerPopoverCloseButton,
  registerPopoverContent,
  registerPopoverHeader,
  registerPopoverTrigger,
} from "../components/registerPopover";
import { registerRadio, registerRadioGroup } from "../components/registerRadio";
import { registerOption, registerSelect } from "../components/registerSelect";

import {
  registerStat,
  registerStatArrow,
  registerStatHelpText,
  registerStatLabel,
  registerStatNumber,
} from "../components/registerStat";
import { registerSwitch } from "../components/registerSwitch";

import {
  registerTable,
  registerTableCaption,
  registerTableContainer,
  registerTbody,
  registerTd,
  registerTh,
  registerThead,
  registerTr,
} from "../components/registerTable";
import {
  registerTab,
  registerTabList,
  registerTabPanel,
  registerTabPanels,
  registerTabs,
} from "../components/registerTabs";

import { registerText } from "../components/registerText";

import {
  registerAccordion,
  registerAccordionItem,
  registerAccordionButton,
  registerAccordionPanel,
  registerAccordionIcon,
} from "../components/registerAccordion";

import {
  registerAvatar,
  registerAvatarBadge,
  registerAvatarGroup,

} from "../components/registerAvatar";

import {
  registerChakraProvider,
} from "../components/registerChakraProvider";

import {
  registerFormControl,
  registerFormLabel,
  registerFormHelperText,
  registerFormErrorMessage,
} from "../components/registerFormControl";

import {
  registerHeading,
} from "../components/registerHeading";

import {
  registerHighlight,
} from "../components/registerHighlight";

import {
  registerProgress,
} from "../components/registerProgress";

import {
  registerToast,
} from "../components/registerToast";

import {
  registerTooltip,
} from "../components/registerTooltip";

import {
  registerModal,
} from "../components/registerModal";

import {
  registerIconButton,
} from "../components/registerIconButton";

import {
  registerDrawerButtonIcon,
} from "../components/registerDrawerButtonIcon";

registerButton()
registerButtonGroup()
registerAspectRatio()
registerBadge()
registerBreadcrumbItem()
registerBreadcrumbLink()
registerBreadcrumb()
registerBreadcrumbSeparator()
registerCheckbox()
registerCheckboxGroup()
registerCode()
registerDivider()
registerImage()
registerInputGroup()
registerInputLeftElement()
registerInput()
registerKbd()
registerNumberDecrementStepper()
registerNumberIncrementStepper()
registerNumberInput()
registerNumberInputField()
registerNumberInputStepper()
registerPinInput() 
registerPinInputField()
registerPopover()
registerPopoverArrow()
registerPopoverBody()
registerPopoverCloseButton()
registerPopoverContent()
registerPopoverHeader()
registerPopoverTrigger()
registerRadio() 
registerRadioGroup()
registerOption() 
registerSelect()
registerStat()
registerStatArrow()
registerStatHelpText()
registerStatLabel()
registerStatNumber()
registerSwitch()
registerTable()
registerTableCaption()
registerTableContainer()
registerTbody()
registerTd()
registerTh()
registerThead()
registerTr()
registerTab()
registerTabList()
registerTabPanel()
registerTabPanels()
registerTabs()
registerText()
registerAccordion()
registerAccordionItem()
registerAccordionButton()
registerAccordionPanel()
registerAccordionIcon()
registerAvatarBadge()
registerAvatar()
registerAvatarGroup()
registerChakraProvider()
registerFormControl()
registerFormLabel()
registerFormHelperText()
registerFormErrorMessage()
registerHeading()
registerHighlight()
registerProgress()
registerToast()
registerTooltip()
registerModal()
registerIconButton()
registerDrawerButtonIcon()


export default function PlasmicHost() {
  return PLASMIC &&<PlasmicCanvasHost />;
}
    