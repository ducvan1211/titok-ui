import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/311736177_860138555352823_6571511662795010329_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=45s1PmAe1xcAX_Yv0mH&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDvIUpjSnP3c36OgIW6HiXumv8hdv_VkpoNTDlfRhCYBQ&oe=64ED2AE8"
                alt="Lê Thị Hồng Nhung"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>lehongnhung</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('tick')} />
                </p>
                <p className={cx('name')}>Lê Thị Hồng Nhung</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
};
export default AccountItem;
