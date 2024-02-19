// vite-jquery-plugin.ts
import { Plugin } from 'vite';

export default function injectJQuery(): Plugin {
    return {
        name: 'inject-jquery',
        transform(code) {
            return {
                code: code.replace(
                    'import React from \'react\';',
                    'import React from \'react\';\nimport $ from \'jquery\';'
                )
            };
        }
    };
}
