module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "@typescript-eslint/consistent-type-imports": "off",
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "quotes": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
    },
    globals: {
        "__IS_DEV__": true
    }
}
