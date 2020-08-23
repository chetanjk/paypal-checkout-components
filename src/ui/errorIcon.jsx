/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';
import { SVGLogo } from '@paypal/sdk-logos/src/lib';

export function ErrorIcon() : ComponentNode<{||}> {
    return (
        <SVGLogo
            name='errorIcon'
            render={ () => (
                <svg width="32" height="32" viewBox="0 0 32.00199890136719 32" fill="#cc0000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.062 32h27.812a2 2 0 0 0 1.766-2.942l-13.876-26A1.997 1.997 0 0 0 16.002 2H16c-.738 0-1.414.406-1.762 1.056L.3 29.056a2.004 2.004 0 0 0 .046 1.972A2.005 2.005 0 0 0 2.062 32zM16 24a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 24zm-2-3.968v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-4 0z" />
                </svg>
            ) }
        />
    );
}
