const express = require("express");
const app = express();
const cors = require("cors");
var JiraClient = require("jira-connector");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

var jira = new JiraClient({
    host: "keshav-garg.atlassian.net",
    basic_auth: {
        username: "keshavgarg8800@gmail.com",
        password: "ATATT3xFfGF0tZ7YkLvb-m7dsIKgEOwb-awPLjfFgeU_5IvKIkXHIzlHzBuvmF4BdDdvhE2FoqbDuNl-gGDSAHbF0ZoYR-M1tdIA0dhAMi0O2kv38oxPSTmu5nWp4DVeNdi66pPUhMM1y8ytmbIuig95qWlN3Q1NP9Dr7dG1kwpzfOR3O8wA05U=47B8D320",
    },
    strictSSL: false,
});

app.post("/", (req, res) => {
    res.send("start new nodejs server");
    if (req.body.status === "success"){
        jira.issue.createIssue({
            fields: {
                project: {
                    key: "HLT",
                },
                summary: "Jira rest api via nodejs library",
                description: "this jira issue is created using jira-connector",
                issuetype: {
                    name: "story",
                },
                customfield_10014: "HLT-03",
            },
            function(error, issue){
                console.log("error", error);
                console.log("issue", issue);
            },
            
            
        });
    }else {
        console.log("status: nope");
    }
});

app.listen(5001, () => console.log("listening on port 5001"));