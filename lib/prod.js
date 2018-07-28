'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var reactIntl = require('react-intl');

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _React$createContext = React.createContext(),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var ReactIntlContextProvider = function (_React$Component) {
  inherits(ReactIntlContextProvider, _React$Component);

  function ReactIntlContextProvider(props) {
    classCallCheck(this, ReactIntlContextProvider);

    var _this = possibleConstructorReturn(this, (ReactIntlContextProvider.__proto__ || Object.getPrototypeOf(ReactIntlContextProvider)).call(this, props));

    var updateProps = function updateProps(newProps) {
      return _this.setState(function (prevState) {
        return {
          providerProps: _extends({}, prevState.providerProps, newProps)
        };
      });
    };
    _this.state = {
      updateProps: updateProps,
      providerProps: _extends({}, props.initialProps)
    };
    return _this;
  }

  createClass(ReactIntlContextProvider, [{
    key: "render",
    value: function render() {
      var children = this.props.children;

      return React.createElement(
        Provider,
        { value: this.state },
        React.createElement(
          reactIntl.IntlProvider,
          _extends({
            key: this.state.providerProps.locale
          }, this.state.providerProps),
          children
        )
      );
    }
  }]);
  return ReactIntlContextProvider;
}(React.Component);

function loadLocaleData(locales) {
  var loc = locales.map(function (l) {
    return [].concat(toConsumableArray(require("react-intl/locale-data/" + l)));
  });
  reactIntl.addLocaleData(loc.reduce(function (a, b) {
    return a.concat(b);
  }, []));
}

exports.IntlProvider = ReactIntlContextProvider;
exports.IntlConsumer = Consumer;
exports.loadLocaleData = loadLocaleData;
