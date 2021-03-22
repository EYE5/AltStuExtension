export function dateSort(data) {
  if (data.length === 0) return;

  const res = {};

  for (let item of data) {
    let time;

    if (item.details.time.indexOf('в') !== -1) {
      time = item.details.time.slice(0, item.details.time.indexOf('в'));
    } else time = item.details.time;

    if (!res[time]) res[time] = [];

    res[time].push(item);
  }

  return res;
}

export function receiverSort(data) {
  if (data.length === 0) return;

  const res = {};

  for (let item of data) {
    if (!res[item.details.receiver]) res[item.details.receiver] = [];

    res[item.details.receiver].push(item);
  }

  return res;
}

export function senderSort(data) {
  if (data.length === 0) return;

  const res = {};

  for (let item of data) {
    if (!res[item.details.sender]) res[item.details.sender] = [];

    res[item.details.sender].push(item);
  }

  return res;
}
