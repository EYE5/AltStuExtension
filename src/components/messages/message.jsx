import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { List, FlexboxGrid, Panel, Grid, Col, Row } from 'rsuite';

const styleCenterLeft = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  padding: '0 0 0 10px',
  height: '60px',
};

const Message = observer(({ message }) => {
  const [toggle, setToggle] = useState(false);

  let text = '';

  for (let data of message.data) {
    let temp = data.text.replace('&quot;', '"');

    if (data.tag === 'a')
      text += `<a href="${data.text}" target="_blank">${data.text}</a><br>`;
    else text += `${temp}<br>`;
  }

  return (
    <List.Item onClick={() => setToggle(!toggle)}>
      <FlexboxGrid className="message">
        <FlexboxGrid.Item
          colspan={22}
          style={{ ...styleCenterLeft, fontSize: '1.2em' }}
        >
          {message.data[0].text}
        </FlexboxGrid.Item>
      </FlexboxGrid>
      {toggle ? (
        <Panel>
          <Grid fluid>
            <Row>
              <Col xs={12}>{message.details.receiver}</Col>
              <Col xs={4} xsPush={8}>
                {message.details.time}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>{message.details.sender}</Col>
            </Row>
            <Row>
              <Col xs={20}>
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
              </Col>
            </Row>
          </Grid>
        </Panel>
      ) : (
        ''
      )}
    </List.Item>
  );
});

export default Message;
