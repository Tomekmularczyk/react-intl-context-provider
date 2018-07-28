import React from "react";
import { IntlProvider, addLocaleData } from "react-intl";

const { Provider, Consumer } = React.createContext();

class ReactIntlContextProvider extends React.Component {
  constructor(props) {
    super(props);

    const updateProps = newProps =>
      this.setState(prevState => ({
        providerProps: { ...prevState.providerProps, ...newProps }
      }));
    this.state = {
      updateProps,
      providerProps: { ...props.initialProps }
    };
  }

  render() {
    const { children } = this.props;
    return (
      <Provider value={this.state}>
        <IntlProvider
          key={this.state.providerProps.locale}
          {...this.state.providerProps}
        >
          {children}
        </IntlProvider>
      </Provider>
    );
  }
}

function loadLocaleData(locales) {
  const loc = locales.map(l => [...require(`react-intl/locale-data/${l}`)]);
  addLocaleData(loc.reduce((a, b) => a.concat(b), []));
}

export {
  ReactIntlContextProvider as IntlProvider,
  Consumer as IntlConsumer,
  loadLocaleData
};
