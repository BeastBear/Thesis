import { Auth0Provider, User, type AppState } from "@auth0/auth0-react";

type Props = {
    children: React.ReactNode; 
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirecutUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if(!domain || !clientId || !redirecutUri) {
        throw new Error("umable to initialise auth");
    }

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        console.log("USER", user);
        console.log("APP STATE", appState);
    }   

    return(
        <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{ 
            redirect_uri: redirecutUri 
        }}
        onRedirectCallback ={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )        
}

export default Auth0ProviderWithNavigate;