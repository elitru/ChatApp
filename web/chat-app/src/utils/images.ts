import LogoWhite from './../images/logo_white.svg';

import LogoLightPrimary1 from './../images/light/logo_primary_1.svg';
import LogoLightPrimary2 from './../images/light/logo_primary_2.svg';
import LogoLightPrimary3 from './../images/light/logo_primary_3.svg';

import User from './../images/user-solid.svg';

import SampleProfileImage from './../images/profile_img.jpg';

export default class Images{
    public static getLogoWhite(): any{
        return LogoWhite;
    }

    public static getLogoPrimary1(): any{
        return LogoLightPrimary1;
    }

    public static getLogoPrimary2(): any{
        return LogoLightPrimary2;
    }

    public static getLogoPrimary3(): any{
        return LogoLightPrimary3;
    }

    public static getUser(): any{
        return User;
    }

    public static getSampleProfile(): any{
        return SampleProfileImage;
    }
}