# Trial (msal-react example along with MS Graph)
Starting point for HFHT applications that require Msal authentication and Graph profile information. 

### Auth layer
The authentication layer wraps the entire application, the child pages will only be visible to authenticated users. It utilizes Msal to authenticate the user, if they
aren't currently logged in then a basic login button is provided. The children are wrapped in the MsalProvider. The account information is passed to the Profile layer

### Profile layer
The profile layer uses MS Graph to access profile information for the authenticated user. It extracts the user's photo. The account information and photo are passed
to the App layer

### App layer
This where the typical React App lives. Only authenticated users can get to this level.

### .env variables
These values are provided by Microsoft when you register your application:
- VITE_MSALCLIENTID 
- VITE_AUTH

### Dependencies
The project uses Vite for a minimal React environment. TailwindCSS is included but not used in this skeleton.
