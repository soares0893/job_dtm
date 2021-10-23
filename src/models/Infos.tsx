export default class Infos {

    #id: number
    #date: string
    #type: string
    #units: string
    #forecast: string

    constructor(id: number, date: string, type: string, units: string, forecast: string) {
        this.#id = id
        this.#date = date
        this.#type = type
        this.#units = units
        this.#forecast = forecast
    }

    get id() {
        return this.#id
    }
    get date() {
        return this.#date
    }
    get type() {
        return this.#type
    }
    get units() {
        return this.#units
    }
    get forecast() {
        return this.#forecast
    }

    toObject() {
        return (
                {id: this.id,
                date: this.date,
                type: this.type,
                units: this.units,
                forecast: this.forecast}
        )
    }
}