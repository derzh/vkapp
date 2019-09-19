import React from 'react';
import { Panel, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();
const Info = props => (
    <Panel id={props.id}>
        <PanelHeader left={<HeaderButton onClick={props.go} data-to="home">
    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
</HeaderButton>}
>
    Rachel
    </PanelHeader>
        Тут тело 2
    </Panel>
);

export default Info;