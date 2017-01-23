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
                            "title": "Hi  Welcome to Macadamia Hair."
                        }
                    },
                    "actions": [
                        {
                            "type": "button",
                            "label": "Get Started",
                            "nextNodes": [
                                "GET_STARTED"
                            ]
                        },


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
                            "label": "Enter",
                            "nextNodes": [
                                "ENTER"
                            ]
                        }
                    ]
                }
            },
            "HOME": {
                "type": "basic",
                "messages": {
                    "data": {
                        "type": "text",
                        "value": {
                            "title": "This is home"
                        }
                    },
                    "actions": [
                        {
                            "type": "button",
                                "label": "Enter",
                            "nextNodes": [
                                "ENTER"
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
                    "actions": [
                        {
                            "type": "button",
                            "label": "Home",
                            "nextNodes": [
                                "HIE","HOME"
                            ]
                        }
                    ]
                }
            },
            "ENTER": {
                "type": "basic",
                "description": "Enter Node",
                "onEntryPlugins": [
                    {
                        "name": "subscription",
                        "method": "subscribe",
                        "params": {
                            "subscriptionName": "SocialUpdates"
                        }
                    }
                ],
                "messages": {
                    "data": {
                        "type": "text",
                        "value": {
                            "title": "Hi! Welcome to Demo."
                        }
                    },
                    "actions": [
                        {
                            "type": "button",
                            "label": "How To Use",
                            "nextNodes": [
                                "HELP"
                            ]
                        }
                    ]
                }

            },
            "HIE": {
                "type": "basic",
                "messages": {
                    "data": {
                        "type": "text",
                        "value": {
                            "title": "Heree are some tips to get the most out of your experience.\n\nMost items have buttons you can click on for faster navigation.\n\nIf there are multiple items shown swipe to see more.\n\nClick ≡ in bottom left for your quick menu options."
                        }
                    },

                }
            }
        }
    }
}

