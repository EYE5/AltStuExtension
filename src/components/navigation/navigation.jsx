import { List } from 'rsuite'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <List hover>
            <List.Item>
                <Link to='/schedule'>Расписание</Link>
            </List.Item>
            <List.Item>
                <Link to='/messages'>Сообщения</Link>
            </List.Item>
            <List.Item>
                <Link to='/files'>Файлы</Link>
            </List.Item>
        </List>
    )
}

export default Navigation