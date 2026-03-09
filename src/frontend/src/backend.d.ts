import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    name: string;
    description: string;
    isPopular: boolean;
    priceRange: string;
    category: string;
}
export interface Submission {
    id: bigint;
    name: string;
    email: string;
    reservedDate: string;
    reservedTime: string;
    message: string;
    partySize: bigint;
    phone: string;
}
export interface Review {
    published: boolean;
    text: string;
    rating: bigint;
    reviewer: string;
}
export interface BusinessInfo {
    hours: string;
    address: string;
    rating: bigint;
    phone: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    getBusinessInfo(): Promise<BusinessInfo>;
    getMenuCategories(): Promise<Array<string>>;
    getMenuItemsByCategory(category: string): Promise<Array<MenuItem>>;
    getPopularMenuItems(): Promise<Array<MenuItem>>;
    getPublishedReviews(): Promise<Array<Review>>;
    getSubmissionById(id: bigint): Promise<Submission>;
    init(): Promise<void>;
    submitForm(name: string, phone: string, email: string, reservedDate: string, reservedTime: string, partySize: bigint, message: string): Promise<bigint>;
}
