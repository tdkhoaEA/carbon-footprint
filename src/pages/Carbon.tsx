/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Select from 'react-select';
import Header from '../components/Header'
import { IconUsers, IconArrowsExchange, IconCar, IconCloudSnow, IconHelpHexagon } from '@tabler/icons-react';
import axios from 'axios';

interface OptionType {
    value: string;
    label: string;
}

// interface LatLng {
//     lat: any,
//     lng: any
// }

interface VehicleData {
    [key: string]: number;
  }

const key: string = 'qnNrrKsjjpoDR6ZIwJw7OsuzkcyN1hmD';

function CarbonView() {
    const [fromLocation, setFromLocation] = useState('');
    // const [isSetFromLocation, setIsFromLocation] = useState<boolean>(false);
    // const [latFromLocation, setLatFrom] = useState<LatLng>({ lat: null, lng: null });

    const [toLocation, setToLocation] = useState('');
    // const [isSetToLocation, setIsToLocation] = useState<boolean>(false);
    // const [latToLocation, setLatTo] = useState<LatLng>({ lat: null, lng: null });

    const [isLoading, setLoading] = useState(false);
    const [routeInfo, setRoutInfo] = useState({
        time: 0
    })
    const [distance, setDistance] = useState(0)

    // const [timerId, setTimerId] = useState<any>(null);
    
    // const handleKeyUp = (address: string, isFrom: boolean) => {
    //     clearTimeout(timerId);
    
    //     if (address) {
    //     const newTimerId = setTimeout(() => {
    //     // Call your API here
    //     getGeoLocation(address, isFrom)
    //     }, 3000); // 2000 milliseconds = 2 seconds

    //     setTimerId(newTimerId);
    // }
    // };

    const customStyles = {
        option: (prev: any) => ({
            ...prev,
            cursor: 'pointer',
        //   backgroundColor: state.isFocused ? 'lightgray' : 'white',
        //   ':hover': {
        //     backgroundColor: 'lightgray',
        //     cursor
        //   },
        }),
        control: (provided: any) => ({
            ...provided,
            height: 56, // Change the height of the select box
            cursor: 'pointer',
        }),
    };

    const options: OptionType[] = [
        { value: 'walking', label: 'walking' },
        { value: 'cycling', label: 'cycling' },
        { value: 'motorbike', label: 'motorbike' },
        { value: 'small car - 4 seats', label: 'Small car - 4 seats' },
        { value: 'medium car - 5 seats', label: 'Medium car - 5 seats' },
        { value: 'eclectric car - 4 seats', label: 'Eclectric car - 4 seats' },
        { value: 'large car - 7 seats', label: 'Large car - 7 seats' },
    ];
    const [selectedOption, setSelectedOption] = useState<any>({ value: 'walking', label: 'walking' });

    const handleOptionChange = (selected: any) => {
        setSelectedOption(selected);
    };

    const noOftravelers: OptionType[] = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '12', label: '12' },
        { value: '13', label: '13' },
        { value: '14', label: '14' },
        { value: '15', label: '15' },
        { value: '16', label: '16' },
    ];
    const [selectedNoTravelers, setSelectedNoTravelers] = useState<any>({ value: '1', label: 'Yourself' },);

    const handleNoTravelersChange = (selected: any) => {
        setSelectedNoTravelers(selected);
    };
    
    // const getGeoLocation = async (query: string, isFrom: boolean) => {
    //     try {
    //         console.log("hello")
    //         console.log(query)
    //         const content = `https://www.mapquestapi.com/geocoding/v1/address?key=${key}&inFormat=kvp&outFormat=json&location=${query}&thumbMaps=false`
    //         console.log(content)
    //         const response = await axios(content)
    //             .then((res) => {
    //                 if(isFrom) {
    //                     setIsFromLocation(true);
    //                     if(res?.data?.results[0]?.locations[0]?.latLng)
    //                         setLatFrom(res?.data?.results[0]?.locations[0]?.latLng);
    //                 } else {
    //                     setIsToLocation(true);
    //                     if(res?.data?.results[0]?.locations[0]?.latLng)
    //                         setLatTo(res?.data?.results[0]?.locations[0]?.latLng);
    //                 }
                    
    //                 // coordinate.lat = lat;
    //                 // coordinate.lng = lng;
    //                 console.log(res.data.results[0].locations[0]);
    //             });
    //         console.log(response);
    //     } catch (error) {
    //             console.error(error);
    //         }
    // }
    
    const vehicle: VehicleData = {
        "walking": 0,
        "cycling": 0,
        // "train": 0.0351,
        // "bus": 0.10144,
        "motorbike": 0.08094,
        "small car - 4 seats": 0.12945,
        "medium car - 5 seats": 0.17513,
        "large car - 7 seats": 0.21122,
        "eclectric car - 4 seats": 0.04519,
        "eclectric car - 7 seats": 0.06004,
    }
    // const [distanceForCal, setCalculateDistance] = useState(0);

    const calculateCarbon = (distance: number) =>{
        const emissionValue: number = distance * parseFloat(vehicle[selectedOption.value].toPrecision(4));
        return emissionValue
        // return distance*vehicle[selectedOption.value].toPrecision(4)
    }

    // const suggestVehicleList = (distance, type) => {
    //     let defaultCaluclation = calculateCarbon(distance,type);
    //     let res = entries(vehicle).map(ele => {
    //         // console.log(ele[1])
    //         ele[1] = calculateCarbon(distance, ele[0]).toPrecision(2);
    //         return ele
    //     })
    //     // console.log(res)
    //     let suggestion = res.filter(ele => {
    //         return ele[1] <= defaultCaluclation
    //     });
    //     setSuggestion(suggestion)
    // }
    
    const getDistance = async () => {
        setLoading(true)
        const content = `https://www.mapquestapi.com/directions/v2/route?key=${key}`
        try {
            axios.post(
                content,
                {   
                    locations: [
                        fromLocation,
                        toLocation
                    ],
                    // locations: [
                    //     `${latFromLocation.lat},${latFromLocation.lng}`,
                    //     `${latToLocation.lat},${latToLocation.lng}`
                    // ],
                    options: {
                        avoids: [],
                        avoidTimedConditions: false,
                        doReverseGeocode: true,
                        shapeFormat: 'raw',
                        generalize: 0,
                        routeType: 'fastest',
                        timeType: 1,
                        locale: 'en_US',
                        unit: 'k',
                        enhancedNarrative: false,
                        drivingStyle: 2,
                        highwayEfficiency: 21.0,
                    },
                },
            ).then((res) => {
                console.log(res)
                if(res.status === 200) {
                    
                    console.log(res.data.route)
                    console.log(res.data.route.distance)
                    setRoutInfo(res.data.route);
                    setDistance(res.data.route.distance)
                    console.log(distance)
                    setLoading(false);
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = (query: string, isFrom: boolean) => {
        if(isFrom) {
            // if(isSetFromLocation && query !== fromLocation) {
            //     setIsFromLocation(false);
            // }
            setFromLocation(query);
        }else {
            // if(isSetFromLocation && query !== toLocation) {
            //     setIsFromLocation(false);
            // }
            setToLocation(query)
        }
    };

    return (
    <>
        <Header />
        <div className = 'top-container mt-8 px-[10%] md:px-[6%] lg:px-[4%] flex flex-col justify-center w-full box-border'>
            <div className='mx-auto w-[300px] flex flex-col items-center'>
                <h2 className=' font-bold text-[36px] leading-10 text-primary'>Your route</h2>
                {/* <p className='font-medium hover:underline hover:cursor-pointer mt-4' onClick={() => navigate('/')}>Back to home</p> */}
            </div>
            <div className='location w-full border border-gray-800 mt-8 shadow-md p-4 bg-[#F9F9F9]'>
                <div className='description-content flex justify-between items-center w-full px-[2%]'>
                    <div className='w-full md:w-2/3 flex'>
                        <div className='h-16 w-16 rounded-full bg-sky-500 flex-shrink-0 flex items-center justify-center'><IconCloudSnow size='32' color='white'/></div>
                        <div className='ml-4'>
                        <h2 className='text-lg font-semibold'>Carbon footprint calculation</h2>
                        <p className='text-base font-normal'>The formula is based on the given information of a routes, then calculate carbon footprint generated between 2 locations. </p>
                        <div className='flex space-x-2 mt-2'>
                            <IconHelpHexagon/> 
                            <a className=''>More info</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col md:flex-row justify-around mt-8 '>
                    <div className='location-input px-[2%] flex flex-col space-y-4 w-full md:w-2/3 bg-white p-2'>
                        <div className='w-full'>
                            <p className='text-lg font-bold text-center text-primary'>Trip detail</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex grow '>
                                <input 
                                    onChange={
                                        (e) => {
                                            console.log(e.target.value)
                                            handleSearchChange(e.target.value, true)
                                        }
                                    }
                                    // onKeyUp={() => handleKeyUp(fromLocation, true)}
                                    value={fromLocation}
                                    className={`flex items-center w-full h-14 pl-3 mt-1 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-green`}
                                    placeholder="Your starting point"
                                />
                                {/* {
                                    isSetFromLocation && (
                                        <div>
                                            {latFromLocation.lat} - {latFromLocation.lng}
                                        </div>
                                    )
                                } */}
                            </div>
                            <div className='w-fit flex px-2'>
                                <IconArrowsExchange />
                            </div>
                            <div className='flex grow shrink'>
                                <input
                                    onChange={
                                        (e) => {
                                            console.log('e.target.value')
                                            handleSearchChange(e.target.value, false)
                                        }
                                    }
                                    // onKeyUp={() => handleKeyUp(toLocation, false)}
                                    value={toLocation}
                                    className={`flex items-center w-full h-14 pl-3 mt-1 text-sm font-normal text-gray-600 border border-gray-300 rounded focus:outline-none focus:border focus:border-green`}
                                    placeholder="You go here"
                                />
                                {/* {
                                    isSetToLocation && (
                                        <div>
                                            {latToLocation.lat} - {latToLocation.lng}
                                        </div>
                                    )
                                } */}
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-white flex items-center'>
                                    <div className='flex shrink grow pr-4'>
                                        <IconCar />
                                    </div>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={handleOptionChange}
                                        options={options}
                                        styles={customStyles}
                                        placeholder="Your transportation" 
                                    />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='bg-white flex items-center'>
                                    <div className='flex shrink grow pr-4'>
                                        <IconUsers />
                                    </div>
                                    <Select
                                        defaultValue={selectedNoTravelers}
                                        onChange={handleNoTravelersChange}
                                        options={noOftravelers}
                                        styles={customStyles}
                                        placeholder="Number of travelers" 
                                    />
                            </div>
                        </div>
                        <button 
                        onClick = {() => {
                            if(fromLocation === '' || toLocation === '') {
                                alert('Need to add two locations')
                                return 
                            }
                            getDistance
                        }}
                        className='h-[46px] inline-flex w-full justify-center gap-x-1.5 items-center rounded-mdpx-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 bg-primary hover:brightness-95 text-white focus:text-white'>Calculate</button>
                    </div>
                    
                    {
                            isLoading ? (
                                <p className='animate-pulse px-4'>Calculating the carbon footprint</p>
                            ) :
                            distance ? (
                                <><div className='w-full md:w-1/3 bg-white p-2 ml-0 md:ml-8  mt-2 md:mt-0'>
                                <div>
                                    <p className='font-semibold text-lg text-primary'>Your carbon footprint: </p>
                                    <p className='px-2 font-normal text-base'>{calculateCarbon(distance)} kg CO2</p>
                                </div>
                                
                                <div className='w-full'>
                                <p className='font-semibold text-lg text-primary mb-2 mt-4'>Your trip detail: </p>
                                    <p><span className='font-semibold'>Travelers:</span> 5</p>
                                    <p className=''><span className='font-semibold'>Distance:</span> {distance} km</p>
                                    <p><span className='font-semibold'>Time:</span> {(routeInfo?.time/60).toPrecision(3)} mins</p>
                                </div>
                            </div></>
                            ) : (
                                <><div className='w-full md:w-1/3 bg-white p-2 ml-0 md:ml-8 mt-2 md:mt-0'>
                                <div>
                                    <p className='font-semibold text-lg text-primary'>Your carbon footprint: </p>
                                </div>
                            </div></>
                            )
                            
                        }
                    
                </div>

                {/* <div className='w-full flex justify-around mt-8 bg-white'>
                    <p className='w-full py-2 px-4 text-center bg-primary text-white text-xl font-semibold'>Carbon calculation</p>
                </div> */}
            </div>
        </div>        
    </>
)
}

export default CarbonView