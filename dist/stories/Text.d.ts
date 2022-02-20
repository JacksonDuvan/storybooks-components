/// <reference types="react" />
import './text.css';
export interface MyTextProps {
    size: 'normal' | 'h1' | 'h2' | 'h3';
}
export declare const Text: ({ size }: MyTextProps) => JSX.Element;
