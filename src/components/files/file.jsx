import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { List, FlexboxGrid, Icon, Panel, Grid, Col, Row } from 'rsuite';

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px',
};

const styleCenterLeft = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  height: '60px',
};

const styleCenterRight = {
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  height: '60px',
};

const File = observer(({ file }) => {
  const [toggle, setToggle] = useState(false);

  const fileName = file.link.slice(
    file.link.lastIndexOf('/') + 1,
    file.link.lastIndexOf('.'),
  );

  const fileExtension = file.link.slice(
    file.link.lastIndexOf('.') + 1,
    file.link.length,
  );

  const fileNameShort =
    fileName.length > 30 ? `${fileName.slice(0, 30)}...` : fileName;

  let text = '';

  for (let data of file.data) {
    let temp = data.text.replace('&quot;', '"');

    if (data.tag === 'a')
      text += `<a href="${data.text}" target="_blank">${data.text}</a><br>`;
    else text += `${temp}<br>`;
  }

  let fileIcon;

  switch (fileExtension.toLowerCase()) {
    case 'pdf':
      fileIcon = 'file-pdf-o';
      break;
    case 'rar':
      fileIcon = 'file-zip-o';
      break;
    case 'zip':
      fileIcon = 'file-zip-o';
      break;
    case 'doc':
      fileIcon = 'file-word-o';
      break;
    case 'docx':
      fileIcon = 'file-word-o';
      break;
    case 'xlsx':
      fileIcon = 'file-excel-o';
      break;
    default:
      fileIcon = 'file-o';
      break;
  }

  return (
    <List.Item onClick={() => setToggle(!toggle)}>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={2} style={styleCenter}>
          <Icon
            icon={fileIcon}
            style={{
              color: 'darkgrey',
              fontSize: '1.5em',
            }}
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={18}
          style={{ ...styleCenterLeft, fontSize: '1.2em' }}
        >
          {fileNameShort}
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={4}
          style={{ ...styleCenterRight, fontSize: '1.2em' }}
        >
          <a href={file.link} target="_blank" rel="noreferrer">
            Скачать
          </a>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      {toggle ? (
        <Panel>
          <Grid fluid>
            <Row>
              <Col xs={12}>{file.details.receiver}</Col>
              <Col xs={4} xsPush={8}>
                {file.details.time}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>{file.details.sender}</Col>
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

export default File;
