export default class Colors {

    public static readonly THEME_LIGHT: object = {
        '--color-pri-1': '#3835fc',
        '--color-pri-2': '#5d55fa',
        '--color-pri-3': '#7d7fd3',
        '--color-pri-4': '#a7a5f4',
        '--color-sec-1': '#f3f8fc', //1A334B
        '--color-sec-2': '#e7edf3',
        '--color-sec-3': '#fff',
        '--color-fg-very-dark': '#1A334B',
        '--color-fg-dark': '#2a4b6c',
        '--color-fg-light': '#ffffff',
        '--color-error': '#cb564f',
        '--color-no-profile-img': '#c2cad3',
        '--color-box-shadow': '#9eaebd'
    };

    //TODO: implement more themes

    public static load(theme: ColorTheme = ColorTheme.LIGHT): void{
        let usedTheme: any;

        switch(theme){
            case ColorTheme.LIGHT:
                usedTheme = Colors.THEME_LIGHT
                break;
        }

        Object.keys(usedTheme).map(key => {
            const value = usedTheme[key];
            document.documentElement.style.setProperty(key, value);
        });
    }
}

export enum ColorTheme{
    LIGHT,
    DARK
}