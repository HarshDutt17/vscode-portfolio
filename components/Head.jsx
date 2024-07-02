import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Harsh Dutt is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta name="google-site-verification" content="1EDuWP8gubCIUOEDDaYGBUFf7MoueNM6O7qJwYUsAOY" />
      <meta
        name="keywords"
        content="Harsh dutt, harsh, dutt, web developer portfolio, harsh web developer, harsh developer, mern stack, harsh dutt portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Harsh Dutt's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://private-user-images.githubusercontent.com/78022802/344993901-95915f4c-4349-4f9f-b548-d0d68b123580.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk5MTgxNTgsIm5iZiI6MTcxOTkxNzg1OCwicGF0aCI6Ii83ODAyMjgwMi8zNDQ5OTM5MDEtOTU5MTVmNGMtNDM0OS00ZjlmLWI1NDgtZDBkNjhiMTIzNTgwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAyVDEwNTczOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMwODgzYzdhNjZjMTA4OWU2N2MzOTA1NThkODhhYjViZDQ0NjQ5ZThjNTRhYzczYWE2MWM4NGE0OTRjNjQ3NTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zGheYxb0BRv5guoipq-MhqpAaNblK3IqR0Rop9CceKY" />
      <meta property="og:url" content="https://hx4sh.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Harsh Dutt',
};
