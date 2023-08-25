import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/config';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUpload,
    faGear,
    faCoins,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons';
import images from '~/asset/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import Search from '~/layouts/components/Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },

                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const isLogin = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/favorites',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/profile',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search></Search>
                <div className={cx('action')}>
                    {isLogin ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {' '}
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={isLogin ? userMenu : MENU_ITEMS} hideOnClick={false}>
                        {isLogin ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9bc531d24ff2b073d346282835b7a483~c5_100x100.jpeg?x-expires=1692802800&x-signature=IogSlwv2xAK50Ulx8yQdcHbEKNE%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('btn-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
