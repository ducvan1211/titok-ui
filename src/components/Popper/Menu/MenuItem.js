import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', { separate: data.separate });
    return (
        <Button onClick={onClick} leftIcon={data.icon} to={data.to} className={classes}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
