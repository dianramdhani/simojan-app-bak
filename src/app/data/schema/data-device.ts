export class DataDevice {
    ts: string;
    gps: {
        lat: number,
        lng: number
    };
    acc: number;
    conn: boolean
}