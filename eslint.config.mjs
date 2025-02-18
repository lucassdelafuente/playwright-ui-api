import playwright from "eslint-plugin-playwright";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/node_modules/",
        "**/playwright-report/",
        "**/test-results/",
    ],
}, ...compat.extends(
    "airbnb-base",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
), {
    plugins: {
        playwright,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json",
            },

            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },

    rules: {
        "arrow-body-style": "off",
        "no-console": "error",
        "import/no-named-as-default": 0,
        "playwright/no-focused-test": "error",
        "playwright/no-duplicate-hooks": "error",
        "playwright/no-commented-out-tests": "error",
        "playwright/missing-playwright-await": "error",
        "playwright/no-useless-await": "error",
        "playwright/no-page-pause": "error",
        "playwright/no-standalone-expect": "error",
        "playwright/no-wait-for-timeout": "error",
        "playwright/prefer-to-have-length": "error",
        "playwright/prefer-to-have-count": "error",
        "playwright/no-conditional-expect": "error",
        "playwright/valid-expect": "error",
        "playwright/no-useless-not": ["error"],
        "playwright/prefer-locator": "error",
        "playwright/no-wait-for-selector": "error",
        "playwright/prefer-comparison-matcher": "error",
        "playwright/prefer-equality-matcher": "error",
        "@typescript-eslint/ban-ts-comment": "off",
        "object-curly-newline": "off",
        "import/order": "error",
        "no-plusplus": "off",
        "no-use-before-define": "off",
        "default-param-last": 0,
        "no-loop-func": "off",
        "lines-around-comment": "off",

        "import/extensions": ["error", "ignorePackages", {
            "": "never",
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
        }],

        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "no-await-in-loop": "off",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "default-case": "off",
        "consistent-return": "off",
        "no-restricted-syntax": "off",
        "class-methods-use-this": "off",
        "no-continue": "off",
        "prefer-const": "off",
        "no-shadow": "off",
        "dot-notation": "error",
        "no-useless-computed-key": "error",
        "@typescript-eslint/no-shadow": "error",

        "padding-line-between-statements": ["error", {
            blankLine: "always",
            prev: "block-like",
            next: "function",
        }, {
            blankLine: "always",
            prev: "block-like",
            next: "block-like",
        }, {
            blankLine: "always",
            prev: "function",
            next: "function",
        }, {
            blankLine: "always",
            prev: "block-like",
            next: "return",
        }, {
            blankLine: "always",
            prev: "directive",
            next: "directive",
        }, {
            blankLine: "always",
            prev: "*",
            next: "return",
        }, {
            blankLine: "always",
            prev: "block-like",
            next: "export",
        }, {
            blankLine: "always",
            prev: "*",
            next: "if",
        }, {
            blankLine: "always",
            prev: "*",
            next: "try",
        }, {
            blankLine: "always",
            prev: "*",
            next: "while",
        }, {
            blankLine: "always",
            prev: "*",
            next: "do",
        }, {
            blankLine: "always",
            prev: "*",
            next: "for",
        }, {
            blankLine: "always",
            prev: "*",
            next: "switch",
        }, {
            blankLine: "always",
            prev: "*",
            next: "throw",
        }, {
            blankLine: "always",
            prev: "*",
            next: "class",
        }, {
            blankLine: "always",
            prev: "*",
            next: "block-like",
        }],

        "lines-between-class-members": ["error", {
            enforce: [{
                blankLine: "always",
                prev: "*",
                next: "field",
            }, {
                blankLine: "always",
                prev: "field",
                next: "*",
            }, {
                blankLine: "always",
                prev: "*",
                next: "method",
            }, {
                blankLine: "never",
                prev: "field",
                next: "field",
            }],
        }],

        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            args: "after-used",
            caughtErrors: "none",
        }],

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": "error",

        "@typescript-eslint/explicit-function-return-type": ["error", {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
        }],
    },
}, ...compat.extends("plugin:@typescript-eslint/recommended", "plugin:playwright/recommended").map(config => ({
    ...config,
    files: ["**/*.spec.ts"],
})), {
    files: ["**/*.spec.ts"],

    languageOptions: {
        parser: tsParser,
    },

    rules: {
        "no-restricted-syntax": ["error", {
            selector: "SequenceExpression",
            message: "Sequence expressions are not allowed in tests.",
        }, {
            selector: "BreakStatement",
            message: "Break statements are not allowed in tests.",
        }, {
            selector: "ForStatement",
            message: "For statements are not allowed in tests.",
        }, {
            selector: "SwitchStatement",
            message: "Switch statements are not allowed in tests.",
        }, {
            selector: "TryStatement",
            message: "Try/catch blocks are not allowed in tests.",
        }],
    },
}, {
    files: ["**/*.spec.ts"],

    rules: {
        "playwright/max-expects": ["error", {
            max: 4,
        }],

        "playwright/max-nested-describe": ["error", {
            max: 1,
        }],

        "playwright/prefer-hooks-in-order": "error",

        "playwright/require-top-level-describe": ["error", {
            maxTopLevelDescribes: 1,
        }],
    },
}];