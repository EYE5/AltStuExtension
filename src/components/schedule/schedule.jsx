import { useEffect } from 'react';
import { List, Grid, Row, Col, Loader } from 'rsuite';
import { observer } from 'mobx-react-lite';

import { getStore } from '../../store/globalStore';

import './schedule.css';

const store = getStore();

const Schedule = observer(() => {
  useEffect(() => {
    store.headerActions = [
      {
        func: () => (store.activeSchedule = store.schedule[0]),
        text: 'Сегодня',
      },
      {
        func: () => (store.activeSchedule = store.schedule[1]),
        text: 'Завтра',
      },
    ];
  }, []);

  let subjectsList;
  if (store.activeSchedule)
    subjectsList = store.activeSchedule.map((subject, index) => {
      return (
        <List.Item key={index}>
          <Grid>
            <Row>
              <Col xs={18}>{subject.name + subject.type}</Col>
              <Col xs={6}>{subject.place}</Col>
            </Row>
            <Row>
              <Col xs={18}>{subject.date}</Col>
              <Col xs={6}>{subject.teacher}</Col>
            </Row>
          </Grid>
        </List.Item>
      );
    });

  return (
    <List className="schedule">
      {store.loading ? (
        <Loader center size="lg" />
      ) : subjectsList ? (
        subjectsList
      ) : (
        ''
      )}
    </List>
  );
});

export default Schedule;
