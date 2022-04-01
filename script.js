function getRandomInt(min, max)
{
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const links = [
"https://forms.gle/xTSnaVAtXcMjaWeAA",
"https://forms.gle/p8Wg4ELcW44NFHrx9",
"https://forms.gle/SWDAAVxJow6Bts7FA",
"https://forms.gle/E7F8ZeQrxgRGN46E9",
"https://forms.gle/9ZaWjm8nakBjE7TB9",
"https://forms.gle/78eGXXRGkn1fATkP9",
"https://forms.gle/AggBKpM3ex8j17Ck6",
"https://forms.gle/r8tcyMhsFnMGjAM46",
"https://forms.gle/6hdqfc39AqctN7KY9",
"https://forms.gle/wW9fLAYpameRKymf9",
"https://forms.gle/Eq2BQwDQWY5vWNQX9",
"https://forms.gle/JdoRfZM2b9cjN4ee8",
"https://forms.gle/QBVo6yzMNiegH97w9",
"https://forms.gle/ed7jpy8eTsUUoesh8",
"https://forms.gle/vPXA5s18oidAgJuc9",
"https://forms.gle/fEG52GUPVTiy3YBH7",
"https://forms.gle/DvD3Zh2QREzbutL8A",
"https://forms.gle/Gmm2bN2D5wk8epFg8",
"https://forms.gle/Eni4gthVTCaxgMVGA",
"https://forms.gle/wTi7dqVDZwMuuyJQ9",
"https://forms.gle/a1JUXgSis7yQzL8n9",
"https://forms.gle/Pc69x9sh5JVT4iD3A",
"https://forms.gle/T1Upo5aWwWrCRWP16",
"https://forms.gle/tknVisfNHcxVjp9Q9",
"https://forms.gle/Qj9VCEtvnLmium5y7",
"https://forms.gle/ruzV4hH3KqhGrZLJA",
"https://forms.gle/39F3FMHj7SaWjztY7",
"https://forms.gle/BAri7c9Pzqqwm4tW8",
"https://forms.gle/EFc27r8bTCy5ZNCr8"
];

const x = getRandomInt(1, 29);
const toPrint = "<h3><a href=\"" + links[x] + "\">Jeśli nie zostałeś przekierowany, kliknij w ten link!</a></h3>";

document.write(toPrint);
window.location.replace(links[x]);