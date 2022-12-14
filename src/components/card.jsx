export default function Card(props) {
    let imgPath = "./images/" + props.picture

    return (
        <div className="container w-[550px] mx-auto bg-white h-[240px] py-8">
            <div className="card w-[471px] mx-auto h-[168px] grid grid-cols-10 gap-4">
                <div className="img col-span-3">
                    <img src={imgPath} alt="" />
                </div>
                <div className="body col-span-7">
                    <div className="locations flex h-8 items-center pt-[19px] pb-[0px]">
                        <svg className="" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A" />
                        </svg>
                        <p className="pl-1 pr-3 text-[10px] font-semibold tracking-widest">{props.location}</p>
                        <a className="text-[10px] text-linkcolor underline opacity-70 hover:opacity-100" href={props.url} target="blank">View on Google Maps</a>
                    </div>
                    <div className="title text-[25px] font-bold">
                        <h2>{props.location_name}</h2>
                    </div>
                    <div className="time text-[10px] font-bold pt-[9px] pb-[4px]">
                        <p><span>{props.from}</span> - <span>{props.to}</span></p>
                    </div>
                    <div className="description text-[11px] font-medium leading-3">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}