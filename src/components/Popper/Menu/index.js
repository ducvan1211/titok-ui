import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Menu({ children, items = [], hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    return (
        <Tippy
            onHide={() => {
                if (history.length > 1) {
                    setHistory((pre) => pre.slice(0, pre.length - 1));
                }
            }}
            hideOnClick={hideOnClick}
            delay={[0, 700]}
            offset={[12, 8]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((pre) => pre.slice(0, pre.length - 1));
                                }}
                            ></Header>
                        )}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.func,
};
export default Menu;
