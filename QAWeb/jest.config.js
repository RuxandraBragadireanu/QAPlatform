module.exports = {
  "roots": [
    "<rootDir>/client/app"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFiles": [
    "<rootDir>/client/app/setupTests.ts"
  ],
  "globals": {
    "ts-jest": {
      "tsConfig": "./client/app/tsconfig.json"
    }
  }
}
