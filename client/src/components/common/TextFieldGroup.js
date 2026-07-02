import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled,
  showPasswordToggle
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    showPasswordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="form-group mb-3 position-relative">
      <input
        type={inputType}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      {showPasswordToggle && type === "password" && (
        <span
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}

      {info && <small className="form-text text-muted">{info}</small>}

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  showPasswordToggle: PropTypes.bool
};

TextFieldGroup.defaultProps = {
  type: "text",
  showPasswordToggle: false
};

export default TextFieldGroup;