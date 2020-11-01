import React from 'react';

const AboutScreen = () => {

    const json = {
        "pronouns": "He",
        "code": [
            "Javascript", "Typescript",
            "Go", "Dart",
            "Java",
            "Bash", "HTML"
        ],
        "askMeAbout": ["FrontEnd Dev", "BackEnd Dev", "FullStack Dev", "App Dev"],
        "technologies": {
            "editors": ["VSCode", "Visual Studio"],
            "mobileApp": ["Flutter", "Ionic", "Android", "iOS", "Cordova"],
            "frontEnd": {
                "js": [
                    "ES6", "Angular", "React",
                    "AngularJs",
                    "npm", "grunt",
                    "gulp", "webpack",
                    "storybook"
                ],
                "css": [
                    "Bootstrap", "Bulma",
                    "Angular Material", "SASS",
                    "FlexBox"
                ],
            },
            "backEnd": {
                "js": ["NodeJs", "express", "got", "handlebars"],
                "go": ["mux"],
                "java": ["Spring Boot"]
            },
            "testing": {
                "js": [
                    "Jest", "Jasmine",
                    "Karma", "MochaJs"
                ],
            },
            "devOps": [
                "Openshift",
                "Docker", "GitlabCI",
                "Jenkins"
            ],
            "databases": [
                "PostgreSQL", "MongoDB",
                "MySql", "SQL Server", "sqlite"
            ],
            "misc": [
                "git", "OpenApi",
                "WebSockets","Postman"
            ],
        }
    };

    return (
        <>
            <div className="container p-4">
                <h3>Ricardo Trejo Sanjuan</h3>
                <p></p>
                <p className="text-justify">Curious and passionate person with ease to express my opinion and thoughts about any topic. I consider myself as a great admirer of IT and software development, as well as the impact it has in our daily lives. I focus my formation like Full Stack developer. My analytic and self-taught aptitudes allow me to solve problems efficiently and turn them into a software solution.</p>

                <h4>About Me :D</h4>
                <pre className="header-inner">
                    {/* <code className="hljs"> */}
                    <code className="hljs">
                        {JSON.stringify(json, null, 3)}
                    </code>
                </pre>
            </div>
        </>
    );
};

export default AboutScreen;