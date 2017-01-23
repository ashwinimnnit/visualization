module.exports = {
    schema: {
        "nodes": {
        "GREETING_TEXT": {
            "type": "basic",
            "label": "Greeting",
            "messages": {
                "data": {
                    "type": "text",
                    "value": {
                        "title": "Hi {{user_first_name}}! Welcome to Macadamia Hair."
                    }
                },
                "actions": [
                    {
                        "type": "button",
                        "label": "Get Started",
                        "nextNodes": [
                            "GET_STARTED","HIE"
                        ]
                    }
                ]
            }
        },
    "GET_STARTED": {
        "type": "basic",
        "label": "Get Started",
        "messages": {
            "data": {
                "type": "text",
                "value": {
                    "title": "Hi {{user_first_name}}! Welcome to Macadamia Hair."
                },
                "subtitle": "You are signed up to receive periodic updates."
            },
            "actions": [
                {
                    "type": "button",
                    "label": "Help",
                    "nextNodes": [
                        "HELP","HIE"
                    ]
                }
            ]
        }
    },
    "HELP": {
        "type": "basic",
        "messages": {
            "data": {
                "type": "text",
                "value": {
                    "title": "Here are some tips to get the most out of your experience.\n\nMost items have buttons you can click on for faster navigation.\n\nIf there are multiple items shown swipe to see more.\n\nClick ≡ in bottom left for your quick menu options."
                }
            },

        }
    },
            "HIE": {
                "type": "basic",
                "messages": {
                    "data": {
                        "type": "text",
                        "value": {
                            "title": "Here are some tips to get the most out of your experience.\n\nMost items have buttons you can click on for faster navigation.\n\nIf there are multiple items shown swipe to see more.\n\nClick ≡ in bottom left for your quick menu options."
                        }
                    },

                }
            }
        }
}}
