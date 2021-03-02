module.exports = {
    plugins:[
        require("material-components-web"),
        require("autoprefixer"),
        require("@fullhuman/postcss-purgecss")({
            content:[
                "./404.html",
                "./about.html",
                "./comingsoon.html",
                "./contact.html",
                "./courses.html",
                "./index.html",
                "./privacy.html",
                "./teachers.html",
                "./user.html"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)||[]
        })
    ]
}