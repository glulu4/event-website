import React from 'react';
import {Spin} from 'antd';

interface LoadingIndicatorProps {
    isLoading: boolean;
}

const LoadingIndicator = ({isLoading}: LoadingIndicatorProps) => {
    return isLoading ? (
        <Spin size="large" style={{display: 'block', textAlign: 'center', margin: '20px 0'}} />
    ) : null;
};

export default LoadingIndicator;
