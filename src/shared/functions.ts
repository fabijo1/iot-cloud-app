// tslint:disable-next-line:variable-name
export function precisionRound( number, precision: number ) {
    const factor = Math .pow (10 , precision );
    return Math . round ( number * factor ) / factor ;
}

export function formatDate(date) {
date = date + 2 * 60;

const dateObj = new Date ( date * 1000) ;
let dateString = '';

if ( dateObj . getHours (). toString (). length === 1) {
dateString = '0' + dateObj . getHours () + ':';

} else {
dateString = dateObj . getHours () + ':';
}

if ( dateObj . getMinutes (). toString (). length === 1) {
dateString = dateString + '0' + dateObj.getMinutes ();
} else {
dateString = dateString + dateObj . getMinutes ();
}
return dateString ; }
