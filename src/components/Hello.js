"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var HelloComponent = (function (_super) {
    __extends(HelloComponent, _super);
    function HelloComponent(argument) {
    }
    HelloComponent.prototype.render = function () {
        return (React.createElement("h1", null, 
            "Hello from ", 
            this.props.compiler, 
            " and ", 
            this.props.framework, 
            "!"));
    };
    return HelloComponent;
}(React.Component));
exports.HelloComponent = HelloComponent;
//# sourceMappingURL=Hello.js.map