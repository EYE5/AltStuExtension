import axios from 'axios';

export async function messagesPage(session) {
  const myHeaders = new Headers();
  myHeaders.append('Cookie', `sessionid=${session}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  console.log(myHeaders);
  const res = await fetch(
    'https://student.altstu.ru/message/unread/',
    requestOptions,
  );
  console.log(await res.text());
}
