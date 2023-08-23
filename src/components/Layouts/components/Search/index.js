import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import AccountsItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const inputSearchRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputSearchRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);
    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountsItem></AccountsItem>
                        <AccountsItem></AccountsItem>
                        <AccountsItem></AccountsItem>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputSearchRef}
                    value={searchValue}
                    onFocus={() => setShowResult(true)}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                />
                {!!searchValue && (
                    <button onClick={handleClear} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                {/* loading */}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
