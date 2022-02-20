import './text.css'

export interface MyTextProps {
    size: 'normal'|'h1'|'h2'|'h3'
}

export const Text = ({ size = 'normal' }: MyTextProps) => {
    return ( 
        <p className={`${size}`}>
            Hola Mundo
        </p>
    )
}