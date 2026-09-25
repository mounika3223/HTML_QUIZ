let questionBook = [

    // =========================
    // HTML BASICS
    // =========================

    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },

    {
        id: 2,
        question: "What is HTML mainly used for?",
        options: [
            "Styling web pages",
            "Structuring web pages",
            "Programming databases",
            "Creating operating systems"
        ],
        correctAnswer: "Structuring web pages"
    },

    {
        id: 3,
        question: "Which language is used to style HTML elements?",
        options: [
            "Python",
            "JavaScript",
            "CSS",
            "SQL"
        ],
        correctAnswer: "CSS"
    },

    {
        id: 4,
        question: "Which language is commonly used to add interactivity to HTML pages?",
        options: [
            "CSS",
            "JavaScript",
            "SQL",
            "XML"
        ],
        correctAnswer: "JavaScript"
    },

    {
        id: 5,
        question: "Which symbol is used to create an HTML tag?",
        options: [
            "()",
            "{}",
            "<>",
            "[]"
        ],
        correctAnswer: "<>"
    },

    {
        id: 6,
        question: "Which declaration defines an HTML5 document?",
        options: [
            "<html5>",
            "<!DOCTYPE html>",
            "<doctype html5>",
            "<document html>"
        ],
        correctAnswer: "<!DOCTYPE html>"
    },

    {
        id: 7,
        question: "Which tag represents the root element of an HTML document?",
        options: [
            "<body>",
            "<head>",
            "<html>",
            "<root>"
        ],
        correctAnswer: "<html>"
    },

    {
        id: 8,
        question: "Which section contains metadata about an HTML document?",
        options: [
            "<body>",
            "<head>",
            "<main>",
            "<meta>"
        ],
        correctAnswer: "<head>"
    },

    {
        id: 9,
        question: "Which tag contains the visible content of a web page?",
        options: [
            "<head>",
            "<body>",
            "<main>",
            "<content>"
        ],
        correctAnswer: "<body>"
    },

    {
        id: 10,
        question: "Which tag defines the title displayed in the browser tab?",
        options: [
            "<head>",
            "<title>",
            "<header>",
            "<meta>"
        ],
        correctAnswer: "<title>"
    },


    // =========================
    // HEADINGS AND TEXT
    // =========================

    {
        id: 11,
        question: "Which HTML tag defines the largest heading?",
        options: [
            "<h6>",
            "<heading>",
            "<h1>",
            "<head>"
        ],
        correctAnswer: "<h1>"
    },

    {
        id: 12,
        question: "Which HTML tag defines the smallest heading?",
        options: [
            "<h1>",
            "<h3>",
            "<h5>",
            "<h6>"
        ],
        correctAnswer: "<h6>"
    },

    {
        id: 13,
        question: "Which tag is used to define a paragraph?",
        options: [
            "<paragraph>",
            "<p>",
            "<para>",
            "<text>"
        ],
        correctAnswer: "<p>"
    },

    {
        id: 14,
        question: "Which tag is used to create a line break?",
        options: [
            "<break>",
            "<lb>",
            "<br>",
            "<newline>"
        ],
        correctAnswer: "<br>"
    },

    {
        id: 15,
        question: "Which tag represents strongly important text?",
        options: [
            "<b>",
            "<important>",
            "<strong>",
            "<bold>"
        ],
        correctAnswer: "<strong>"
    },

    {
        id: 16,
        question: "Which tag is used to emphasize text?",
        options: [
            "<em>",
            "<italic>",
            "<i>",
            "<emphasis>"
        ],
        correctAnswer: "<em>"
    },

    {
        id: 17,
        question: "Which tag is commonly used to display bold text without semantic importance?",
        options: [
            "<strong>",
            "<b>",
            "<bold>",
            "<em>"
        ],
        correctAnswer: "<b>"
    },

    {
        id: 18,
        question: "Which tag is commonly used to display italic text?",
        options: [
            "<italic>",
            "<i>",
            "<it>",
            "<emphasis>"
        ],
        correctAnswer: "<i>"
    },

    {
        id: 19,
        question: "Which tag is used to highlight text?",
        options: [
            "<highlight>",
            "<mark>",
            "<highlighted>",
            "<hl>"
        ],
        correctAnswer: "<mark>"
    },

    {
        id: 20,
        question: "Which tag is used to display deleted text?",
        options: [
            "<delete>",
            "<del>",
            "<remove>",
            "<strikeout>"
        ],
        correctAnswer: "<del>"
    },

    {
        id: 21,
        question: "Which tag represents inserted text?",
        options: [
            "<insert>",
            "<ins>",
            "<add>",
            "<new>"
        ],
        correctAnswer: "<ins>"
    },

    {
        id: 22,
        question: "Which tag is used to display subscript text?",
        options: [
            "<sub>",
            "<small>",
            "<sup>",
            "<lower>"
        ],
        correctAnswer: "<sub>"
    },

    {
        id: 23,
        question: "Which tag is used to display superscript text?",
        options: [
            "<super>",
            "<sup>",
            "<sub>",
            "<upper>"
        ],
        correctAnswer: "<sup>"
    },

    {
        id: 24,
        question: "Which HTML tag preserves whitespace and line breaks?",
        options: [
            "<space>",
            "<pre>",
            "<preserve>",
            "<text>"
        ],
        correctAnswer: "<pre>"
    },


    // =========================
    // LINKS
    // =========================

    {
        id: 25,
        question: "Which tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<href>",
            "<a>",
            "<url>"
        ],
        correctAnswer: "<a>"
    },

    {
        id: 26,
        question: "Which attribute specifies the destination URL of a hyperlink?",
        options: [
            "src",
            "href",
            "link",
            "url"
        ],
        correctAnswer: "href"
    },

    {
        id: 27,
        question: "Which attribute opens a link in a new browsing context?",
        options: [
            "new",
            "target=\"_blank\"",
            "open=\"new\"",
            "window=\"new\""
        ],
        correctAnswer: "target=\"_blank\""
    },

    {
        id: 28,
        question: "Which attribute provides additional information about a link?",
        options: [
            "info",
            "title",
            "description",
            "details"
        ],
        correctAnswer: "title"
    },


    // =========================
    // IMAGES
    // =========================

    {
        id: 29,
        question: "Which tag is used to display an image?",
        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        correctAnswer: "<img>"
    },

    {
        id: 30,
        question: "Which attribute specifies the path of an image?",
        options: [
            "href",
            "src",
            "path",
            "url"
        ],
        correctAnswer: "src"
    },

    {
        id: 31,
        question: "Which attribute provides alternate text for an image?",
        options: [
            "title",
            "alt",
            "description",
            "text"
        ],
        correctAnswer: "alt"
    },

    {
        id: 32,
        question: "Why is the alt attribute important?",
        options: [
            "It changes image size",
            "It provides alternative text for accessibility",
            "It changes image color",
            "It creates an image link"
        ],
        correctAnswer: "It provides alternative text for accessibility"
    },

    {
        id: 33,
        question: "Which element can be used to provide multiple image sources for responsive images?",
        options: [
            "<responsive>",
            "<picture>",
            "<image-set>",
            "<source-image>"
        ],
        correctAnswer: "<picture>"
    },


    // =========================
    // LISTS
    // =========================

    {
        id: 34,
        question: "Which tag creates an unordered list?",
        options: [
            "<ol>",
            "<ul>",
            "<list>",
            "<li>"
        ],
        correctAnswer: "<ul>"
    },

    {
        id: 35,
        question: "Which tag creates an ordered list?",
        options: [
            "<ul>",
            "<ol>",
            "<order>",
            "<list>"
        ],
        correctAnswer: "<ol>"
    },

    {
        id: 36,
        question: "Which tag defines an item inside a list?",
        options: [
            "<item>",
            "<li>",
            "<list-item>",
            "<element>"
        ],
        correctAnswer: "<li>"
    },

    {
        id: 37,
        question: "Which tags are used to create a description list?",
        options: [
            "<dl>, <dt>, <dd>",
            "<ul>, <li>",
            "<ol>, <li>",
            "<list>, <item>"
        ],
        correctAnswer: "<dl>, <dt>, <dd>"
    },


    // =========================
    // DIV AND SPAN
    // =========================

    {
        id: 38,
        question: "Which element is commonly used as a generic block-level container?",
        options: [
            "<span>",
            "<div>",
            "<section>",
            "<container>"
        ],
        correctAnswer: "<div>"
    },

    {
        id: 39,
        question: "Which element is commonly used as a generic inline container?",
        options: [
            "<div>",
            "<inline>",
            "<span>",
            "<text>"
        ],
        correctAnswer: "<span>"
    },

    {
        id: 40,
        question: "What type of element is <div> by default?",
        options: [
            "Inline",
            "Block-level",
            "Semantic",
            "Form element"
        ],
        correctAnswer: "Block-level"
    },

    {
        id: 41,
        question: "What type of element is <span> by default?",
        options: [
            "Block-level",
            "Inline",
            "Table-level",
            "Semantic"
        ],
        correctAnswer: "Inline"
    },


    // =========================
    // TABLES
    // =========================

    {
        id: 42,
        question: "Which tag is used to create a table?",
        options: [
            "<table>",
            "<tab>",
            "<grid>",
            "<data>"
        ],
        correctAnswer: "<table>"
    },

    {
        id: 43,
        question: "Which tag defines a table row?",
        options: [
            "<td>",
            "<tr>",
            "<th>",
            "<row>"
        ],
        correctAnswer: "<tr>"
    },

    {
        id: 44,
        question: "Which tag defines a normal table cell?",
        options: [
            "<cell>",
            "<td>",
            "<data>",
            "<tc>"
        ],
        correctAnswer: "<td>"
    },

    {
        id: 45,
        question: "Which tag defines a table header cell?",
        options: [
            "<thead>",
            "<header>",
            "<th>",
            "<td>"
        ],
        correctAnswer: "<th>"
    },

    {
        id: 46,
        question: "Which tag defines the header section of a table?",
        options: [
            "<header>",
            "<thead>",
            "<th>",
            "<table-head>"
        ],
        correctAnswer: "<thead>"
    },

    {
        id: 47,
        question: "Which tag defines the body section of a table?",
        options: [
            "<tbody>",
            "<body>",
            "<table-body>",
            "<tdbody>"
        ],
        correctAnswer: "<tbody>"
    },

    {
        id: 48,
        question: "Which tag defines the footer section of a table?",
        options: [
            "<footer>",
            "<tfoot>",
            "<table-footer>",
            "<tf>"
        ],
        correctAnswer: "<tfoot>"
    },

    {
        id: 49,
        question: "Which attribute allows a table cell to span multiple columns?",
        options: [
            "rowspan",
            "colspan",
            "span-column",
            "columns"
        ],
        correctAnswer: "colspan"
    },

    {
        id: 50,
        question: "Which attribute allows a table cell to span multiple rows?",
        options: [
            "rowspan",
            "colspan",
            "rows",
            "span-row"
        ],
        correctAnswer: "rowspan"
    },


    // =========================
    // FORMS
    // =========================

    {
        id: 51,
        question: "Which tag is used to create an HTML form?",
        options: [
            "<input>",
            "<form>",
            "<forms>",
            "<form-data>"
        ],
        correctAnswer: "<form>"
    },

    {
        id: 52,
        question: "Which tag is used to create an input field?",
        options: [
            "<input>",
            "<field>",
            "<textbox>",
            "<input-field>"
        ],
        correctAnswer: "<input>"
    },

    {
        id: 53,
        question: "Which input type is used for entering an email address?",
        options: [
            "type=\"mail\"",
            "type=\"email\"",
            "type=\"text-email\"",
            "type=\"address\""
        ],
        correctAnswer: "type=\"email\""
    },

    {
        id: 54,
        question: "Which input type is used for passwords?",
        options: [
            "type=\"pass\"",
            "type=\"password\"",
            "type=\"secure\"",
            "type=\"hidden-password\""
        ],
        correctAnswer: "type=\"password\""
    },

    {
        id: 55,
        question: "Which input type creates a checkbox?",
        options: [
            "type=\"check\"",
            "type=\"checkbox\"",
            "type=\"tick\"",
            "type=\"select\""
        ],
        correctAnswer: "type=\"checkbox\""
    },

    {
        id: 56,
        question: "Which input type creates a radio button?",
        options: [
            "type=\"radio\"",
            "type=\"select\"",
            "type=\"option\"",
            "type=\"choice\""
        ],
        correctAnswer: "type=\"radio\""
    },

    {
        id: 57,
        question: "Which input type is used to select a date?",
        options: [
            "type=\"calendar\"",
            "type=\"date\"",
            "type=\"day\"",
            "type=\"datetime\""
        ],
        correctAnswer: "type=\"date\""
    },

    {
        id: 58,
        question: "Which input type creates a number input?",
        options: [
            "type=\"numeric\"",
            "type=\"number\"",
            "type=\"integer\"",
            "type=\"digits\""
        ],
        correctAnswer: "type=\"number\""
    },

    {
        id: 59,
        question: "Which input type is used to upload a file?",
        options: [
            "type=\"upload\"",
            "type=\"file\"",
            "type=\"document\"",
            "type=\"attachment\""
        ],
        correctAnswer: "type=\"file\""
    },

    {
        id: 60,
        question: "Which input type submits form data?",
        options: [
            "type=\"send\"",
            "type=\"submit\"",
            "type=\"form\"",
            "type=\"upload\""
        ],
        correctAnswer: "type=\"submit\""
    },

    {
        id: 61,
        question: "Which input type creates a reset button?",
        options: [
            "type=\"clear\"",
            "type=\"reset\"",
            "type=\"refresh\"",
            "type=\"remove\""
        ],
        correctAnswer: "type=\"reset\""
    },

    {
        id: 62,
        question: "Which HTML element is used to create a multi-line text input?",
        options: [
            "<input type=\"text\">",
            "<textarea>",
            "<text>",
            "<multiline>"
        ],
        correctAnswer: "<textarea>"
    },

    {
        id: 63,
        question: "Which element creates a dropdown list?",
        options: [
            "<dropdown>",
            "<select>",
            "<option-list>",
            "<list>"
        ],
        correctAnswer: "<select>"
    },

    {
        id: 64,
        question: "Which element defines an option inside a dropdown?",
        options: [
            "<choice>",
            "<option>",
            "<select-option>",
            "<item>"
        ],
        correctAnswer: "<option>"
    },

    {
        id: 65,
        question: "Which HTML element associates a text label with a form control?",
        options: [
            "<label>",
            "<caption>",
            "<name>",
            "<text>"
        ],
        correctAnswer: "<label>"
    },

    {
        id: 66,
        question: "Which attribute makes a form field mandatory?",
        options: [
            "mandatory",
            "required",
            "must",
            "validate"
        ],
        correctAnswer: "required"
    },

    {
        id: 67,
        question: "Which attribute provides a hint inside an input field?",
        options: [
            "hint",
            "placeholder",
            "help",
            "message"
        ],
        correctAnswer: "placeholder"
    },

    {
        id: 68,
        question: "Which attribute specifies the name used when form data is submitted?",
        options: [
            "id",
            "name",
            "key",
            "field"
        ],
        correctAnswer: "name"
    },


    // =========================
    // AUDIO AND VIDEO
    // =========================

    {
        id: 69,
        question: "Which tag is used to embed video content?",
        options: [
            "<movie>",
            "<video>",
            "<media>",
            "<vid>"
        ],
        correctAnswer: "<video>"
    },

    {
        id: 70,
        question: "Which tag is used to embed audio content?",
        options: [
            "<sound>",
            "<audio>",
            "<music>",
            "<media>"
        ],
        correctAnswer: "<audio>"
    },

    {
        id: 71,
        question: "Which attribute displays video/audio controls?",
        options: [
            "buttons",
            "controls",
            "options",
            "player"
        ],
        correctAnswer: "controls"
    },

    {
        id: 72,
        question: "Which attribute automatically starts media playback?",
        options: [
            "start",
            "autoplay",
            "play",
            "automatic"
        ],
        correctAnswer: "autoplay"
    },

    {
        id: 73,
        question: "Which attribute causes media to play repeatedly?",
        options: [
            "repeat",
            "again",
            "loop",
            "replay"
        ],
        correctAnswer: "loop"
    },

    {
        id: 74,
        question: "Which attribute prevents audio from playing with sound initially?",
        options: [
            "silent",
            "muted",
            "nosound",
            "quiet"
        ],
        correctAnswer: "muted"
    },


    // =========================
    // ATTRIBUTES
    // =========================

    {
        id: 75,
        question: "Which attribute uniquely identifies an HTML element?",
        options: [
            "class",
            "id",
            "name",
            "key"
        ],
        correctAnswer: "id"
    },

    {
        id: 76,
        question: "Which attribute is used to assign one or more CSS classes?",
        options: [
            "style",
            "class",
            "css",
            "classes"
        ],
        correctAnswer: "class"
    },

    {
        id: 77,
        question: "Which attribute can contain inline CSS?",
        options: [
            "css",
            "style",
            "design",
            "inline"
        ],
        correctAnswer: "style"
    },

    {
        id: 78,
        question: "Which attribute can make an input field unavailable for editing?",
        options: [
            "readonly",
            "disabled",
            "locked",
            "inactive"
        ],
        correctAnswer: "readonly"
    },

    {
        id: 79,
        question: "Which attribute disables a form control?",
        options: [
            "disabled",
            "inactive",
            "readonly",
            "blocked"
        ],
        correctAnswer: "disabled"
    },

    {
        id: 80,
        question: "What are HTML attributes used for?",
        options: [
            "To provide additional information about elements",
            "To create databases",
            "To execute JavaScript",
            "To compile HTML"
        ],
        correctAnswer: "To provide additional information about elements"
    },


    // =========================
    // META AND HEAD
    // =========================

    {
        id: 81,
        question: "Which tag is used to define metadata?",
        options: [
            "<metadata>",
            "<meta>",
            "<data>",
            "<info>"
        ],
        correctAnswer: "<meta>"
    },

    {
        id: 82,
        question: "Which meta tag helps control the viewport on mobile devices?",
        options: [
            "<meta name=\"mobile\">",
            "<meta name=\"viewport\">",
            "<meta name=\"screen\">",
            "<meta name=\"responsive\">"
        ],
        correctAnswer: "<meta name=\"viewport\">"
    },

    {
        id: 83,
        question: "Which tag is used to link an external CSS file?",
        options: [
            "<css>",
            "<style>",
            "<link>",
            "<stylesheet>"
        ],
        correctAnswer: "<link>"
    },

    {
        id: 84,
        question: "Which attribute specifies the relationship of a linked resource?",
        options: [
            "type",
            "rel",
            "relationship",
            "href"
        ],
        correctAnswer: "rel"
    },

    {
        id: 85,
        question: "Which tag is used to write CSS directly inside an HTML document?",
        options: [
            "<css>",
            "<style>",
            "<design>",
            "<stylesheet>"
        ],
        correctAnswer: "<style>"
    },

    {
        id: 86,
        question: "Which tag is used to include JavaScript in an HTML document?",
        options: [
            "<javascript>",
            "<js>",
            "<script>",
            "<code>"
        ],
        correctAnswer: "<script>"
    },


    // =========================
    // HTML ENTITIES
    // =========================

    {
        id: 87,
        question: "Which HTML entity represents a non-breaking space?",
        options: [
            "&space;",
            "&nbsp;",
            "&blank;",
            "&sp;"
        ],
        correctAnswer: "&nbsp;"
    },

    {
        id: 88,
        question: "Which entity is used to display the less-than symbol?",
        options: [
            "&lt;",
            "&less;",
            "&left;",
            "&<;"
        ],
        correctAnswer: "&lt;"
    },

    {
        id: 89,
        question: "Which entity is used to display the greater-than symbol?",
        options: [
            "&gt;",
            "&greater;",
            "&right;",
            "&>;"
        ],
        correctAnswer: "&gt;"
    },

    {
        id: 90,
        question: "Which entity is commonly used to display an ampersand?",
        options: [
            "&and;",
            "&amp;",
            "&symbol;",
            "&per;"
        ],
        correctAnswer: "&amp;"
    },


    // =========================
    // SEMANTIC HTML
    // =========================

    {
        id: 91,
        question: "What is semantic HTML?",
        options: [
            "HTML that only contains CSS",
            "HTML elements that clearly describe their meaning",
            "HTML without attributes",
            "HTML used only for forms"
        ],
        correctAnswer: "HTML elements that clearly describe their meaning"
    },

    {
        id: 92,
        question: "Which semantic element represents the header of a page or section?",
        options: [
            "<top>",
            "<header>",
            "<head>",
            "<heading>"
        ],
        correctAnswer: "<header>"
    },

    {
        id: 93,
        question: "Which semantic element represents navigation links?",
        options: [
            "<navigate>",
            "<navigation>",
            "<nav>",
            "<links>"
        ],
        correctAnswer: "<nav>"
    },

    {
        id: 94,
        question: "Which semantic element represents the main content of a document?",
        options: [
            "<content>",
            "<main>",
            "<body-content>",
            "<primary>"
        ],
        correctAnswer: "<main>"
    },

    {
        id: 95,
        question: "Which semantic element represents an independent piece of content?",
        options: [
            "<article>",
            "<content>",
            "<post>",
            "<independent>"
        ],
        correctAnswer: "<article>"
    },

    {
        id: 96,
        question: "Which semantic element represents a thematic grouping of content?",
        options: [
            "<group>",
            "<section>",
            "<part>",
            "<division>"
        ],
        correctAnswer: "<section>"
    },

    {
        id: 97,
        question: "Which semantic element represents content related to the main content?",
        options: [
            "<side>",
            "<aside>",
            "<related>",
            "<extra>"
        ],
        correctAnswer: "<aside>"
    },

    {
        id: 98,
        question: "Which semantic element represents the footer of a page or section?",
        options: [
            "<bottom>",
            "<footer>",
            "<foot>",
            "<end>"
        ],
        correctAnswer: "<footer>"
    },

    {
        id: 99,
        question: "Which element is used for a figure or illustration?",
        options: [
            "<image>",
            "<figure>",
            "<illustration>",
            "<graphic>"
        ],
        correctAnswer: "<figure>"
    },

    {
        id: 100,
        question: "Which element provides a caption for a <figure>?",
        options: [
            "<caption>",
            "<figcaption>",
            "<figure-caption>",
            "<description>"
        ],
        correctAnswer: "<figcaption>"
    },


    // =========================
    // HTML5 / EMBEDDED CONTENT
    // =========================

    {
        id: 101,
        question: "Which element is used to embed another HTML page or document?",
        options: [
            "<frame>",
            "<iframe>",
            "<embed-page>",
            "<window>"
        ],
        correctAnswer: "<iframe>"
    },

    {
        id: 102,
        question: "Which HTML element can be used to draw graphics using JavaScript?",
        options: [
            "<draw>",
            "<canvas>",
            "<graphic>",
            "<paint>"
        ],
        correctAnswer: "<canvas>"
    },

    {
        id: 103,
        question: "Which element is used to provide different media sources?",
        options: [
            "<media-source>",
            "<source>",
            "<src>",
            "<option>"
        ],
        correctAnswer: "<source>"
    },

    {
        id: 104,
        question: "Which element can embed external content such as PDFs or other resources?",
        options: [
            "<embed>",
            "<external>",
            "<object-data>",
            "<resource>"
        ],
        correctAnswer: "<embed>"
    },

    {
        id: 105,
        question: "Which element represents a scalar measurement within a known range?",
        options: [
            "<range>",
            "<meter>",
            "<measure>",
            "<value>"
        ],
        correctAnswer: "<meter>"
    },

    {
        id: 106,
        question: "Which element represents the progress of a task?",
        options: [
            "<loading>",
            "<progress>",
            "<task>",
            "<status>"
        ],
        correctAnswer: "<progress>"
    },


    // =========================
    // ACCESSIBILITY
    // =========================

    {
        id: 107,
        question: "Which attribute provides alternative text for images?",
        options: [
            "title",
            "alt",
            "text",
            "description"
        ],
        correctAnswer: "alt"
    },

    {
        id: 108,
        question: "Which HTML element is useful for providing a label for a form control?",
        options: [
            "<label>",
            "<caption>",
            "<name>",
            "<text>"
        ],
        correctAnswer: "<label>"
    },

    {
        id: 109,
        question: "Which attribute connects a <label> to a form control using its id?",
        options: [
            "for",
            "target",
            "id",
            "connect"
        ],
        correctAnswer: "for"
    },

    {
        id: 110,
        question: "Why is semantic HTML useful for accessibility?",
        options: [
            "It increases image size",
            "It gives structure and meaning that assistive technologies can understand",
            "It removes CSS",
            "It makes JavaScript faster"
        ],
        correctAnswer: "It gives structure and meaning that assistive technologies can understand"
    },


    // =========================
    // COMMENTS
    // =========================

    {
        id: 111,
        question: "How do you write a comment in HTML?",
        options: [
            "// comment",
            "/* comment */",
            "<!-- comment -->",
            "# comment"
        ],
        correctAnswer: "<!-- comment -->"
    },

    {
        id: 112,
        question: "Are HTML comments displayed on the web page?",
        options: [
            "Yes, always",
            "No",
            "Only in Chrome",
            "Only when CSS is disabled"
        ],
        correctAnswer: "No"
    },


    // =========================
    // HTML5 GLOBAL CONCEPTS
    // =========================

    {
        id: 113,
        question: "Which attribute specifies a unique identifier for an element?",
        options: [
            "class",
            "id",
            "unique",
            "identifier"
        ],
        correctAnswer: "id"
    },

    {
        id: 114,
        question: "Can multiple HTML elements have the same class?",
        options: [
            "Yes",
            "No",
            "Only div elements",
            "Only form elements"
        ],
        correctAnswer: "Yes"
    },

    {
        id: 115,
        question: "Which attribute can store custom data on an HTML element?",
        options: [
            "custom-data",
            "data-*",
            "custom-*",
            "store-*"
        ],
        correctAnswer: "data-*"
    },

    {
        id: 116,
        question: "Which attribute makes an element editable by the user?",
        options: [
            "editable",
            "contenteditable",
            "edit",
            "modify"
        ],
        correctAnswer: "contenteditable"
    },

    {
        id: 117,
        question: "Which attribute specifies the language of an HTML document?",
        options: [
            "language",
            "lang",
            "locale",
            "language-code"
        ],
        correctAnswer: "lang"
    },

    {
        id: 118,
        question: "Which value of the lang attribute represents English?",
        options: [
            "en",
            "eng",
            "english",
            "en-US-only"
        ],
        correctAnswer: "en"
    },


    // =========================
    // HTML CONCEPTS
    // =========================

    {
        id: 119,
        question: "What is an HTML element?",
        options: [
            "Only an opening tag",
            "A complete structure consisting of tags and content when applicable",
            "Only an attribute",
            "Only text"
        ],
        correctAnswer: "A complete structure consisting of tags and content when applicable"
    },

    {
        id: 120,
        question: "What is an HTML attribute?",
        options: [
            "Additional information provided inside an HTML element",
            "A CSS file",
            "A JavaScript function",
            "A database value"
        ],
        correctAnswer: "Additional information provided inside an HTML element"
    },

    {
        id: 121,
        question: "Which of the following is a void element?",
        options: [
            "<div>",
            "<p>",
            "<img>",
            "<section>"
        ],
        correctAnswer: "<img>"
    },

    {
        id: 122,
        question: "Which of the following is a void element?",
        options: [
            "<br>",
            "<div>",
            "<span>",
            "<article>"
        ],
        correctAnswer: "<br>"
    },

    {
        id: 123,
        question: "Which HTML version introduced semantic elements such as <header>, <nav>, and <footer>?",
        options: [
            "HTML 2",
            "HTML 3",
            "HTML 4",
            "HTML5"
        ],
        correctAnswer: "HTML5"
    },

    {
        id: 124,
        question: "Which HTML element is generally preferred over using multiple <div> elements when the content has a clear meaning?",
        options: [
            "Semantic element",
            "<span>",
            "<br>",
            "<font>"
        ],
        correctAnswer: "Semantic element"
    },

    {
        id: 125,
        question: "Which HTML element is appropriate for a standalone blog post?",
        options: [
            "<article>",
            "<aside>",
            "<nav>",
            "<footer>"
        ],
        correctAnswer: "<article>"
    }

];
let questionElement = document.getElementById("question");
let optionElement = document.getElementById("option");
let scoreElement = document.getElementById("score");
let skipElement = document.getElementById("skip");

let score = 0;
let currentQuestion = 0;

function displayQuestion() {

    const { question, options, correctAnswer } = questionBook[currentQuestion];

    console.log(question, options, correctAnswer);

    questionElement.textContent = question;

    options.map((opt) => {

        let btn = document.createElement("button");

        btn.setAttribute("class", "btn");

        btn.textContent = opt;

        optionElement.appendChild(btn);

        btn.addEventListener("click", () => {

            if (opt == correctAnswer) {

                score += 1;

                btn.style.backgroundColor = "green";

            } else {

                score -= 0.25;

                btn.style.backgroundColor = "red";
            }

            scoreElement.textContent =
                `Score: ${score}/${questionBook.length}`;

            let allbuttons = document.querySelectorAll(".btn");

            allbuttons.forEach((v) => {
                v.disabled = true;
            });

            setTimeout(() => {
                nextQuestion();
            }, 1000);

        });

    });
}


function nextQuestion() {

    currentQuestion++;

    optionElement.textContent = "";

    if (currentQuestion == questionBook.length) {

        let percentage = (score / questionBook.length) * 100;

        questionElement.textContent =
            "🎉 Quiz Completed Successfully!";

        scoreElement.innerHTML = `
            <div class="final-score">

                <div class="score-box">
                    <span>Score</span>
                    <strong>${score}/${questionBook.length}</strong>
                </div>

                <div class="score-box">
                    <span>Percentage</span>
                    <strong>${percentage.toFixed(2)}%</strong>
                </div>

            </div>
        `;

        skipElement.style.display = "none";

        let result = document.createElement("h3");

        if (percentage >= 50) {

            result.textContent =
                "🎉 Congratulations! You Passed!";

            result.classList.add("result-pass");

        } else {

            result.textContent =
                "❌ You Failed. Keep Practicing!";

            result.classList.add("result-fail");
        }

        document.getElementById("quiz").appendChild(result);

    } else {

        displayQuestion();

    }
}


skipElement.addEventListener("click", () => {

    nextQuestion();

});


displayQuestion();