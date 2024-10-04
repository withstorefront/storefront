export type MeasurementUnit = 'KILOGRAMS' | 'GRAMS' | 'POUNDS' | 'OUNCES'

export type Measurement = {
    /**
     * The measurement's value.
     */
    value: number
    /**
     * The measurement's unit, such as "KILOGRAMS", "GRAMS", "POUNDS" & "OUNCES".
     */
    unit: MeasurementUnit
}