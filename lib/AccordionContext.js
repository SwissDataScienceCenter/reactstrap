"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AccordionContext = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * AccordionContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  openId: PropTypes.string,    
 * }
 */
var AccordionContext = /*#__PURE__*/_react.default.createContext({});

exports.AccordionContext = AccordionContext;