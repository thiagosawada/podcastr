export function convertDurationToTimeString(duration: number) {
  // Para converter um número de segundos em horas, é necessário dividi-lo por 60 (minutos) e por 60 (horas)
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds].map(unit => {
    return String(unit).padStart(2, '0');
  }).join(':');

  return timeString;
}

