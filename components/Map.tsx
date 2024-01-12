import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({ iconUrl: "images/train-icon.png" })

const blueOptions = { color: 'blue' }
const redOptions = { color: 'red' }

const center: [number, number] = [49.24966, -123.00934];
const firstPolyline: [number, number][] = [
    [49.265918238909485, -123.07899994199839],
    [49.26279801011786, -123.06921504474313],
    [49.25906401709271, -123.04533708707118],
    [49.26509999579129, -123.01364600241529],
    [49.26668720341422, -123.00176963125129],
    [49.264892230194086, -122.98219017318715],
    [49.2593820242805, -122.96402136008776],
    [49.25476803589797, -122.93912635823513],
    [49.253580154712814, -122.91810272900995],
    [49.248639856761386, -122.8970163754327],
    [49.26143352718768, -122.8898080424992],
    [49.277074059012236, -122.85623218892304],
    [49.2740920700144, -122.80005231590651],
    [49.280558346156084, -122.79385232939792],
    [49.28581013189135, -122.79158901590587],
]

const secondPolyline: [number, number][][] = [
    [
        [49.28705301655638, -123.11352479079333],
        [49.28568573905943, -123.12025754669526],
        [49.28280993784802, -123.11657720436686],
        [49.28015383248486, -123.11006777738106],
        [49.27336097277575, -123.1003821890246],
        [49.2627560008806, -123.06922577368242],
        [49.248453260992456, -123.05590657368286],
        [49.24440539621239, -123.04611432101646],
        [49.238520276200504, -123.0318543620401],
        [49.22991971425865, -123.0126510736839],
        [49.22598192710159, -123.0038405448483],
        [49.22024225341597, -122.98845204484839],
        [49.2124791450507, -122.9591986921821],
        [49.20014936606444, -122.94905322883568],
        [49.201627216751916, -122.91262900252056],
        [49.205021044232105, -122.90616291786323],
        [49.22486023075988, -122.88939614484826],
        [49.23338697430486, -122.88280875834096],
        [49.248674874474844, -122.89703783320415],
        [49.25364318027177, -122.91819928872658]

    ],
    [
        [49.20637434173239, -122.90499511399202], //do not make marker
        [49.20459177117095, -122.87431696149699],
        [49.19914864635964, -122.85067460252088],
        [49.189692885803005, -122.8475344779296],
        [49.18293102881222, -122.84476511601432]
    ]

]

const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.24966, -123.00934]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/Laurynk/Expo-Line-and-Millenium-Line.git">By Lauryn Kung </a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <div className='millenium-line'>
                <Marker position={[49.265918238909485, -123.07899994199839]} icon={icon}>
                    <Popup>VCC-Clark Station</Popup>
                </Marker>
                <Marker position={[49.26279801011786, -123.06921504474313]} icon={icon}>
                    <Popup>Commercial Broadway Station</Popup>
                </Marker>
                <Marker position={[49.25906401709271, -123.04533708707118]} icon={icon}>
                    <Popup>Renfrew Station</Popup>
                </Marker>
                <Marker position={[49.26509999579129, -123.01364600241529]} icon={icon}>
                    <Popup>Gilmore Station</Popup>
                </Marker>
                <Marker position={[49.26668720341422, -123.00176963125129]} icon={icon}>
                    <Popup>Brentwood Town Centre Station</Popup>
                </Marker>
                <Marker position={[49.264892230194086, -122.98219017318715]} icon={icon}>
                    <Popup>Holdem Station</Popup>
                </Marker>
                <Marker position={[49.2593820242805, -122.96402136008776]} icon={icon}>
                    <Popup>Sperling-Burnaby Lake Station</Popup>
                </Marker>
                <Marker position={[49.25476803589797, -122.93912635823513]} icon={icon}>
                    <Popup>Lake City Way Station</Popup>
                </Marker>
                <Marker position={[49.253580154712814, -122.91810272900995]} icon={icon}>
                    <Popup>Production Way University Station</Popup>
                </Marker>
                <Marker position={[49.248639856761386, -122.8970163754327]} icon={icon}>
                    <Popup>Lougheed Town Centre Station</Popup>
                </Marker>
                <Marker position={[49.26143352718768, -122.8898080424992]} icon={icon}>
                    <Popup>Burquitlam Station</Popup>
                </Marker>
                <Marker position={[49.277074059012236, -122.85623218892304]} icon={icon}>
                    <Popup>Moody Centre Station</Popup>
                </Marker>
                <Marker position={[49.2740920700144, -122.80005231590651]} icon={icon}>
                    <Popup>Coquitlam Central Station</Popup>
                </Marker>
                <Marker position={[49.280558346156084, -122.79385232939792]} icon={icon}>
                    <Popup>Lincoln Station</Popup>
                </Marker>
                <Marker position={[49.28581013189135, -122.79158901590587]} icon={icon}>
                    <Popup>Lafarge-Lake Douglas Station</Popup>
                </Marker>

                <Polyline pathOptions={redOptions} positions={firstPolyline} />
            </div>
            <div className='expo-line'>
                <Marker position={[49.28705301655638, -123.11352479079333]} icon={icon}>
                    <Popup>Waterfront Station</Popup>
                </Marker>
                <Marker position={[49.28568573905943, -123.12025754669526]} icon={icon}>
                    <Popup>Burrard Station</Popup>
                </Marker>
                <Marker position={[49.28280993784802, -123.11657720436686]} icon={icon}>
                    <Popup>Granville Station</Popup>
                </Marker>
                <Marker position={[49.28015383248486, -123.11006777738106]} icon={icon}>
                    <Popup>Stadium-Chinatown Station</Popup>
                </Marker>
                <Marker position={[49.27336097277575, -123.1003821890246]} icon={icon}>
                    <Popup>Main Street-Science World Station</Popup>
                </Marker>
                <Marker position={[49.2627560008806, -123.06922577368242]} icon={icon}>
                    <Popup>Commercial-Broadway Station</Popup>
                </Marker>
                <Marker position={[49.248453260992456, -123.05590657368286]} icon={icon}>
                    <Popup>Nanaimo Station</Popup>
                </Marker>
                <Marker position={[49.24440539621239, -123.04611432101646]} icon={icon}>
                    <Popup>29th Avenue Station</Popup>
                </Marker>
                <Marker position={[49.238520276200504, -123.0318543620401]} icon={icon}>
                    <Popup>Joyce-Collingwood</Popup>
                </Marker>
                <Marker position={[49.22991971425865, -123.0126510736839]} icon={icon}>
                    <Popup>Patterson</Popup>
                </Marker>
                <Marker position={[49.22598192710159, -123.0038405448483]} icon={icon}>
                    <Popup>Metrotown Station</Popup>
                </Marker>
                <Marker position={[49.22024225341597, -122.98845204484839]} icon={icon}>
                    <Popup>Royal Oak Station</Popup>
                </Marker>
                <Marker position={[49.2124791450507, -122.9591986921821]} icon={icon}>
                    <Popup>Edmonds Station</Popup>
                </Marker>
                <Marker position={[49.20014936606444, -122.94905322883568]} icon={icon}>
                    <Popup>22nd Street Station</Popup>
                </Marker>
                <Marker position={[49.201627216751916, -122.91262900252056]} icon={icon}>
                    <Popup>New Westminister Station</Popup>
                </Marker>
                <Marker position={[49.205021044232105, -122.90616291786323]} icon={icon}>
                    <Popup>Columbia Station</Popup>
                </Marker>
                <Marker position={[49.22486023075988, -122.88939614484826]} icon={icon}>
                    <Popup>Sapperton Station</Popup>
                </Marker>
                <Marker position={[49.23338697430486, -122.88280875834096]} icon={icon}>
                    <Popup>Braid</Popup>
                </Marker>
                <Marker position={[49.248674874474844, -122.89703783320415]} icon={icon}>
                    <Popup>Lougheed Town Centre Station</Popup>
                </Marker>
                <Marker position={[49.25364318027177, -122.91819928872658]} icon={icon}>
                    <Popup>Production Way-University Station</Popup>
                </Marker>

                <Marker position={[49.20459177117095, -122.87431696149699]} icon={icon}>
                    <Popup>Scott Road Station</Popup>
                </Marker>
                <Marker position={[49.19914864635964, -122.85067460252088]} icon={icon}>
                    <Popup>Gateway Station</Popup>
                </Marker>
                <Marker position={[49.189692885803005, -122.8475344779296]} icon={icon}>
                    <Popup>Surrey Central Station</Popup>
                </Marker>
                <Marker position={[49.18293102881222, -122.84476511601432]} icon={icon}>
                    <Popup>King George Station</Popup>
                </Marker>

                <Polyline pathOptions={blueOptions} positions={secondPolyline} />
            </div>

        </MapContainer>
    )
}

export default Map;