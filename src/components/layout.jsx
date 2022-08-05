import Card from './card.jsx'


export default function Layout(props) {
    var arr3 = Object.values(props);
    let cards = arr3.map(card1 => {
        return (<Card
            key={card1.id}
            picture={card1.picture}
            location={card1.location}
            location_name={card1.location_name}
            from={card1.from}
            to={card1.to}
            description={card1.description}
            url={card1.url}
        />
        )
    })

    function addBlackLine(array) {
        let arr = []
        for (let i = 0; i < array.length; i++) {
            if (i != 0) {
                arr.push(
                    <div className="background w-[550px] h-[1px] mx-auto bg-white">
                        <div className="line w-[500px] h-[1px] bg-gray-300 mx-auto opacity-30"></div>
                    </div>
                )
            }
            arr.push(array[i])
        }
        return arr
    }

    cards = addBlackLine(cards)

    return (
        <div className=''>
            <div className="empty_box w-[550px] h-[25px] bg-white mx-auto"></div>
            {cards}
            <div className="empty h-10 w-10"></div>
        </div>
    )
}