# Message structuring

To have consistent data pushes that don't require manual entries of
data values, I will take advantage of Github's API feature and read
commit data into the webpage.

This does mean that the messages have to be structured in a certain
way and a standard way to build a parser that can load in new commits
and generate blog, video, tutorial, etc. entries.


## Models

[cmd]
[tutorial] {
    "title":"",
    "desc":"",
    "tags":[],
    "thumb":"",
    "link":""
}
