export class DateUtils{
    
    /**
     * restituisce l'orario formattato
     * @param dateObj oggetto data
     */
    static formatTimeFromDate(dateObj: Date){
        let minutes = dateObj.getMinutes().toString();
        if(minutes.length<2){
            minutes = '0' + minutes;
        }

        let hours = dateObj.getHours().toString();
        if(hours.length<2){
            hours = '0' + hours;
        }

        return `${hours}:${minutes}`
    }

    static formatTimeFromNumbers(inputHours: number, inputMinutes: number): string{

        let hours = inputHours+''
        let minutes = inputMinutes+''

        if(minutes.length<2){
            minutes = '0' + minutes;
        }

        if(hours.length<2){
            hours = '0' + hours;
        }

        return `${hours}:${minutes}`
    }


    /**
     * Normalizza la data eliminando l'orario
     * @param inputDate data da normalizzare
     * @returns 
     */
    static normalizeDate(inputDate: Date){
        return new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate())
    }

}