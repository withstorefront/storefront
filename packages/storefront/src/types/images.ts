export type Image = {
    /**
     * The URL of the image.
     */
    url: string
    /**
     * The mime-type of the image.
     */
    type?: string
    /**
     * A word or phrase that describes the content of an image.
     */
    alt?: string
    /**
     * The image's width.
     */
    width?: number
    /**
     * The image's height.
     */
    height?: number
}