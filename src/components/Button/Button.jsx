import React from 'react';
// import { Button } from 'antd'
// import { useTranslation } from 'react-i18next'
// import { COLORS } from 'assets/stlyes/theme'
// import Icon from '../icons/customIcon'


const ButtonField = (props) => {
  // const { t } = useTranslation()
  const { value, icon, style, onClick, className } = props;
  const id = `${value}TextArea`;
  return (
    <button
      className={className}
      id={id}
      style={{
        ...style,
      }}
      onClick={onClick}
      // type={type}
      // htmlType={htmlType}
    >
      {icon} {value}
    </button>
  );
};
ButtonField.defaultProps = {
  value: '',
  type: 'primary',
  isEditable: true,
  style: {
    background: '#000',
    borderColor: '#000',
    color: '#fff',
    alignSelf: 'right',
    width: '100%',
    height: 28,
    padding: 2,
  },
};

export default ButtonField;
