function changeLanguage(language) {
    const elements = {
        "header-title": {
            "en": "Welcome to Beautiful corners of the world",
            "ru": "Добро пожаловать в красивые уголки мира"
        }
    };

    const headerTitle = document.getElementById("header-title");
    if (headerTitle) {
        headerTitle.textContent = elements["header-title"][language];
    }
}