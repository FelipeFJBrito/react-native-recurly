/*
TypeScript does not know how to handle image imports, so we use this file
to help TypeScript o understand what we have inside the file icons.ts
*/

declare module "*.png" {
    const value: any;
    export default value;
}
declare module "*.jpg" {
    const value: any;
    export default value;
}
declare module "*.jpeg" {
    const value: any;
    export default value;
}
declare module "*.svg" {
    const value: any;
    export default value;
}
declare module "*.gif" {
    const value: any;
    export default value;
}