import './myLabel.css'

export interface MyLabelProps {
    /**
     * SI quiere todo capitalizado
    */
    allCaps?: boolean
    /**
     * Colores basicos del button
    */
    color?: 'primary'|'secondary'|'tertiary'
      /**
     * Este es el mensaje a mostrar en la etiqueta
    */
    label?: string;
    /**
     * Este es el tamaño de la etiqueta
    */
    size?: 'normal'|'h1'|'h2'|'h3';
    /**
     * Color que quieras agregar
    */
    fontColor?: string
}

export const MyLabel = ({ 
    label = 'No label', 
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: MyLabelProps) => {
    return (
        <span style={{ color: fontColor }} className={`label ${size} text-${color}`}>
            { allCaps ? label.toLocaleUpperCase() : label}
        </span>
    )
}   