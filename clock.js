const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const minutes = -60 * time.getMinutes();

app.style.setProperty('--_dm', `${minutes}s`);/* problem fixed */

app.style.setProperty('--_dh', `${(hour + minutes)}s`); /* Because we want to indicate the current hour with the smaller and larger stick. */