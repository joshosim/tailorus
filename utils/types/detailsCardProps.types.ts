export type DetailsCardProps = {
    id: any;
    title: string,
    design: number,
    url: string
    subTypes: [{
        title: string,
        description: string,
        timeFrame: string,
        price: number,
        availableColors: string[],
        availableSizes: string[],
        image: string

    }]
}

