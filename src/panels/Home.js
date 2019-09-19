import React from 'react';
import { Panel, PanelHeader, Group, Div, Button } from '@vkontakte/vkui';
import { tsPropertySignature } from '@babel/types';
const Home = props => (
    <Panel id={props.id}>
        <PanelHeader>Rachel</PanelHeader>
        Тут тело
        <Group title="Меню">
            <Div>
                <Button size="x1" level="secondary" onClick={props.go}>
                    Информация
                </Button>
            </Div>
        </Group>
    </Panel>
);
export default Home;