import DeviceDetector from 'device-detector-js';

const deviceDetector = new DeviceDetector();

export const detector = (req, _, next) => {
    const userAgent = req.headers['user-agent'] || '';
    const device = deviceDetector.parse(userAgent);
    console.log(device);
    
    req.deviceInfo = {
        client_type: device?.client?.type,
        client_name: device?.client?.name,
        os: device?.os?.name,
        device_type: device?.device?.type,
        device_brand: device?.device?.brand,
        device_model: device?.device?.model
    }
    next();
}