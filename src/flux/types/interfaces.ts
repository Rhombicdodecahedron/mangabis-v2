import {E_ERROR} from './enum';

// REACT
export interface ITarget {
    target: {
        value: React.SetStateAction<string>;
    };

    preventDefault(): void;
}

// ERRORS
export interface IMsg {
    msg: string | any;
}

// AUTH
export interface IUser {
    id?: string;
    name?: string;
    email: string;
    password: string;
    avatar: string;
}

export interface IAuthReduxProps {
    auth: { isAuthenticated: boolean };
    error: IError;
}


export interface IUserRegOrLog {
    id?: string;
    name?: string;
    email: string;
    password: string;
}

export interface ILoginModal extends IAuthForm {
    login(user: IUserRegOrLog): void;
}


//USER
export interface IUserSearched {
    id?: string;
    name: string;
    email: string;
    role: string;
    register_date: Date;
}

export interface IAuthForm {
    isAuthenticated?: boolean;
    error: IError;

    clearErrors(): void;
}

export interface ILoginModal extends IAuthForm {
    login(user: IUserRegOrLog): void;
}

export interface IRegisterModal extends IAuthForm {
    register(user: IUserRegOrLog): void;
}

export interface ILogoutProps {
    logout(): void;
}

export interface IError {
    id: E_ERROR;
    msg: IMsg;
}

export interface IAuthReduxProps {
    auth: { isAuthenticated: boolean };
    error: IError;
}

export interface IConfigHeaders {
    headers: {
        [index: string]: string;
    };
}

// NAVBAR
export interface IAppNavbar {
    auth?: {
        isAuthenticated: boolean;
        user: IUser;
    };
}

// MANGAS
export interface IExistingManga {
    _id: string;
    key: number;
    title: string;
    title_english: string;
    title_japanese: string;
    url_image: string;
    type: string;
    synopsis: string;
    en_cours: boolean;
    annee_sortie: number;
    anneeSortie: number;
    auteurs: [];
    genres: [];
    chapitres: [];
}

export interface IManga {
    _id?: string;
    key: number;
    title: string;
    title_english: string;
    title_japanese: string;
    url_image: string;
    type: string;
    synopsis: string;
    en_cours: boolean;
    annee_sortie: number;
    anneeSortie: number;
    auteurs: [];
    genres: [];
}

export interface IItemModal {
    isAuthenticated: boolean;

    addManga(manga: IManga): void;
}

export interface IMangaReduxProps extends IAuthReduxProps {
    manga: {
        mangas: IExistingManga[];
    };
}

export interface IMangaList {
    manga: {
        mangas: IExistingManga[];
    };

    getMangas(): void;

    deleteManga(_id: string): void;

    getComments(): void;

    isAuthenticated: boolean;
}

// <<<<<<<<<<<>>>>>>>>>>>>
// <<<<<<<< FLUX >>>>>>>>>
// <<<<<<<<<<<>>>>>>>>>>>>

export interface IAuthFunction {
    name?: string;
    email: string;
    password: string;
}

export interface IReturnErrors {
    msg: {
        msg: string | any;
    };
    status: string;
    id: any;
}

export interface IAction {
    type: string;
    payload?: any;
}
