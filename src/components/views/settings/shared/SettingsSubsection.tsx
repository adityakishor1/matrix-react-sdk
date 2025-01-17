/*
Copyright 2022 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { HTMLAttributes } from "react";

import { SettingsSubsectionHeading } from "./SettingsSubsectionHeading";

export interface SettingsSubsectionProps extends HTMLAttributes<HTMLDivElement> {
    heading: string | React.ReactNode;
    description?: string | React.ReactNode;
    children?: React.ReactNode;
}

export const SettingsSubsectionText: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => (
    <div {...rest} className="mx_SettingsSubsection_text">
        {children}
    </div>
);

export const SettingsSubsection: React.FC<SettingsSubsectionProps> = ({ heading, description, children, ...rest }) => (
    <div {...rest} className="mx_SettingsSubsection">
        {typeof heading === "string" ? <SettingsSubsectionHeading heading={heading} /> : <>{heading}</>}
        {!!description && (
            <div className="mx_SettingsSubsection_description">
                <SettingsSubsectionText>{description}</SettingsSubsectionText>
            </div>
        )}
        <div className="mx_SettingsSubsection_content">{children}</div>
    </div>
);

export default SettingsSubsection;
