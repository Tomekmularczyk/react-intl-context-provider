# react-intl-context-provider [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This library exposes a wrapper around [react-intl](https://github.com/yahoo/react-intl) 
*IntlProvider* component using a new React [Context API](https://reactjs.org/docs/context.html). 
This allows to switch language deep in a component tree in a simple way - without a need to use redux or other external library.

### Usage

Just replace the original react-intl *IntlProvider* component with the wrapper and pass the initial props:

```javascript
import { IntlProvider, loadLocaleData } from "react-intl-context-provider";

loadLocaleData(['en', 'de']); // use this instead of addLocaleData

ReactDOM.render(
  <IntlProvider initialProps={{ locale: "en", defaultLocale: "en" }}>
    <App />
  </IntlProvider>,
  document.getElementById("container")
);
```

... and then change the props anywhere in the app using *IntlConsumer*:

```javascript
import { IntlConsumer } from "react-intl-context-provider";
import enTranslation from "../../static/en.json";
import deTranslation from "../../static/de.json";

const LanguageSwitcher = () => (
  <IntlConsumer>
    {({ updateProps, ...providerProps }) => (
      <>
        <button
          onClick={() => updateProps({ locale: "en", messages: enTranslation })}
        >
          switch to english
        </button>
        <button
          onClick={() => updateProps({ locale: "de", messages: deTranslation })}
        >
          > switch to deutsch
        </button>
      </>
    )}
  </IntlConsumer>
);
```

The `updateProps` will shallowly merge new props to an old ones.

Note: changing _locale_ will rerender everything under *IntlProvider*. This is desired as it will re-render the page with a newly set language.

#### loadLocaleData

When you try to add locales in the standard way:
```javascript
import { IntlProvider } from "react-intl-context-provider";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import de from "react-intl/locale-data/de";

addLocaleData([...en, ...de]);

ReactDOM.render(
  <IntlProvider initialProps={{ locale: "en", defaultLocale: "en" }}>
    <App />
  </IntlProvider>,
  document.getElementById("container")
);
```
You will most likely encounter an error when trying to switch language:
> Missing locale data for locale: "de". Using default locale: "en" as fallback.

To fix this library exposes `loadLocaleData` function which accepts an Array of language-codes and is equivalent to the way above.