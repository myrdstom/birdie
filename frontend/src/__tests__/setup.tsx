import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/combineStore';

interface Props extends React.HTMLAttributes<Element> {
    children: React.ReactNode;
}

export const RenderWithRouterMatch: FC<Props> = ({ children }) => <Provider store={store}>{children}</Provider>;
