//List of Events

const events = [
    
    {
        title: 'July Jam Session',
        date: 'Saturday, July 17, 2021 1-4pm',
        description: 'Louisville Jazz Initiative is so excited to host our first jam session! Graciously hosted by <strong>Louisville Central Community Center at 1300 W Muhammad Ali Blvd</strong>, this is open to all ages and abilities. Whether you just sing in the shower or have been playing an instrument for 20 years, we want to see and hear you; you\'re also welcome to just come, enjoy the atmosphere, and listen. This jam session will be free, family-friendly, and FUN - see you there!',
        timecode: '17 Jul 2021 20:00:00 GMT'
    },

    {
        title: 'Old Lou\'s Ragtime Band',
        date: 'Sunday, July 18, 2021 12-2pm',
        description: 'Come to the <strong>Flea Off Market at 1000 E Market Street</strong> to show 100+ local vendors, sample some of the finest food trucks in town, and enjoy early jazz music from Old Lou\'s Ragtime Band!',
        timecode: '17 Jul 2021 20:00:00 GMT'
    },

    {
        title: 'Christmas in July',
        date: 'Saturday, July 24, 2021 11am-1pm',
        description: 'Join Santa’s Little Helpers, Inc, the Louisville Free Public Library, and the Louisville Jazz Initiative to celebrate the end of summer and the first anniversary of the <strong>Little Free Library at 4301 Towne Center</strong> with live Christmas music, giveaways, and lots of fun! Come join us for this free, family event to support our regional foster children. We will be accepting gently used books for our library and welcoming special guest visitors including Derby City Kringle Santa Pat and Mrs. Claus.',
        timecode: '24 Jul 2021 09:00:00 GMT'
    },

    {
        title: 'John Roy\'s Ovation Orchestra',
        date: 'Friday, July 30, 2021 7-9pm',
        description: 'Come hear free traditional big band swing across the river in <strong>Warder Park at 109 E Court Ave, Jeffersonville, Indiana.</strong> Bring lawn chairs or a blanket - and don\'t forget snacks and drinks!',
        timecode: '17 Jul 2021 20:00:00 GMT'
    }

]

//Functions

function insertEvents() {

        var eventList = document.getElementById('events');
        let html = ``;
        let now = Date.now();

        for (let i = 0; i < events.length; i++) {
        
            let eventDate = Date.parse(events[i]['timecode']);
            
            if (eventDate > now) {
                
                html += `
                    <li class="event">
                        <div class="event-heading">
                            <h3 class="event-title">${events[i]['title']}</h3>
                            <p class="event-date">${events[i]['date']}</p>
                        </div>
                        <p class="event-description">${events[i]['description']}</p>
                    </li>
                `;
            }
        }

        eventList.innerHTML = html;
}


//Execute

insertEvents();