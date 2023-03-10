// just for practice. Idealy we can use "npm install @types/lodash"

declare module "lodash" {
  export function random(min: number, max: number): number;
}
