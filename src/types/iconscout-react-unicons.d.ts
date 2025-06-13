declare module '@iconscout/react-unicons' {
    import { FC, SVGAttributes } from 'react';

    export interface IconProps extends SVGAttributes<SVGElement> {
        color?: string;
        size?: string | number;
        className?: string;
    }

    export const UilEstate: FC<IconProps>;
    export const UilSuitcase: FC<IconProps>;
    export const UilAward: FC<IconProps>;
    export const UilUserCircle: FC<IconProps>;
    // Add other icons you use here
}
