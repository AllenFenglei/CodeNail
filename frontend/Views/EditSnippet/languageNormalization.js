//normalization of alias of programming languages
export default function langNorm(lang) {
    lang = lang.toLowerCase().trim();
    switch (lang) {
        case "cpp": case "c++": case "cplusplus": case "c/c++":
            return {name: "c++", highlight: "c_cpp"};
        case "c": case "clang":
            return {name: "c", highlight: "c_cpp"};
        case "java":
            return {name: "java", highlight: "java"};
        case "javascript": case "js":
            return {name: "javascript", highlight: "javascript"};
        case "python": case "py":
            return {name: "python", highlight: "python"};
        case "css":
            return {name: "css", highlight: "css"};
        case "html":
            return {name: "html", highlight: "html"};
        case "php":
            return {name: "php", highlight: "php"};   
        case "ruby":
            return {name: "ruby", highlight: "ruby"};
        case "scala":
            return {name: "scala", highlight: "scala"};
        default:
            return {name: lang, highlight: "c_cpp"};
    }
}
