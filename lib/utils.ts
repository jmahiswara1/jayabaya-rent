/**
 * General utility functions
 * No WA logic here — that belongs in whatsapp.ts
 */

import { type ClassValue, clsx } from "clsx";

/**
 * Merge class names with clsx (Tailwind-friendly)
 */
export function cn(...inputs: ClassValue[]): string {
    return clsx(inputs);
}

/**
 * Format number as Indonesian Rupiah currency
 * Example: 350000 -> "Rp 350.000"
 */
export function formatCurrency(amount: number): string {
    return `Rp ${new Intl.NumberFormat("id-ID").format(amount)}`;
}

/**
 * Format number as compact currency
 * Example: 350000 -> "350rb", 1200000 -> "1.2jt"
 */
export function formatCurrencyCompact(amount: number): string {
    if (amount >= 1_000_000) {
        const value = amount / 1_000_000;
        return `Rp ${value % 1 === 0 ? value : value.toFixed(1)}jt`;
    }
    if (amount >= 1_000) {
        const value = amount / 1_000;
        return `Rp ${value % 1 === 0 ? value : value.toFixed(0)}rb`;
    }
    return `Rp ${amount}`;
}

/**
 * Generate URL-safe slug from string
 * Example: "Toyota Avanza 2022" -> "toyota-avanza-2022"
 */
export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

/**
 * Calculate rental duration in days between two dates
 */
export function calculateDuration(start: Date, end: Date): number {
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1; // Minimum 1 day
}

/**
 * Format date to Indonesian locale string
 * Example: "20 Februari 2026"
 */
export function formatDate(date: Date): string {
    return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

/**
 * Format date to input-compatible string (yyyy-mm-dd)
 */
export function formatDateInput(date: Date): string {
    return date.toISOString().split("T")[0];
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
