const origin = "http://localhost:5000";

export const corsConfig = {
    origin: origin,
    allowedHeaders: [
        "Content-Type", 
    ],
    credentials: true,
};

export const appBrandName = () => {
    return "Portfolio's Dashboard";
};

export const githubLink = () => {
    return "https://github.com/wellspr/portfolio-dashboard";
};