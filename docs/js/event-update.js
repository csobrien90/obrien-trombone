//List of events

const events = [
    
    {
        title: 'July Jam Session',
        date: 'Saturday, July 17th, 2021 1-4pm',
        description: 'Louisville Jazz Initiative is so excited to host our first jam session! Graciously hosted by <strong>Louisville Central Community Center at 1300 W Muhammad Ali Blvd</strong>, this is open to all ages and abilities. Whether you just sing in the shower or have been playing an instrument for 20 years, we want to see and hear you; you\'re also welcome to just come, enjoy the atmosphere, and listen. This jam session will be free, family-friendly, and FUN - see you there!',
        timecode: '17 Jul 2021 20:00:00 GMT'
    },

    {
        title: 'Old Lou\'s Ragtime Band',
        date: 'Sunday, July 18th, 2021 12-2pm',
        description: 'Come to the <strong>Flea Off Market at 1000 E Market Street</strong> to show 100+ local vendors, sample some of the finest food trucks in town, and enjoy early jazz music from Old Lou\'s Ragtime Band!',
        timecode: '17 Jul 2021 20:00:00 GMT'
    },

    {
        title: 'Christmas in July',
        date: 'Saturday, July 24th, 2021 11am-1pm',
        description: 'Join Santa’s Little Helpers, Inc, the Louisville Free Public Library, and the Louisville Jazz Initiative to celebrate the end of summer and the first anniversary of the <strong>Little Free Library at 4301 Towne Center</strong> with live Christmas music, giveaways, and lots of fun! Come join us for this free, family event to support our regional foster children. We will be accepting gently used books for our library and welcoming special guest visitors including Derby City Kringle Santa Pat and Mrs. Claus.',
        timecode: '24 Jul 2021 09:00:00 GMT'
    },

    {
        title: 'John Roy\'s Ovation Orchestra',
        date: 'Friday, July 30th, 2021 7-9pm',
        description: 'Come hear free traditional big band swing across the river in <strong>Warder Park at 109 E Court Ave, Jeffersonville, Indiana.</strong> Bring lawn chairs or a blanket - and don\'t forget snacks and drinks!',
        timecode: '30 Jul 2021 20:00:00 GMT'
    },

    {
        title: 'Public Concert at the Portland Library',
        date: 'Saturday, August 21st, 2021 2-4pm',
        description: 'Join the Louisville Jazz Initiative for a free public performance at the <strong>Portland branch of the Lousiville Free Public Library at 3305 Northwestern Pky</strong>. This concert will feature some of the top jazz professionals in town playing new, original music by local composers - you won\'t want to miss it!',
        timecode: '21 Aug 2021 20:00:00 GMT'
    },

    {
        title: 'Jazz in Central Park',
        date: 'Sunday, August 29th, 2021 5-8pm',
        description: 'Come to <strong>Central Park at 1340 South 4th Street</strong>, one of Louisville\'s best outdoor venues to a night of excellent jazz music by local favorites. With ensembles ranging from a trio to big band and genres from latin jazz to classic swing, there will be something for everyone! This concert is free and open to the public. Find out more on <a href="https://www.eventbrite.com/e/jazz-in-central-park-louisville-ky-tickets-158525974457" target="_blank">the event\'s website</a>.',
        timecode: '29 Aug 2021 20:00:00 GMT'
    },

    {
        title: 'Lou Orleans Brass Band at WorldFest',
        date: 'Saturday, September 4th, 2021 4-5pm',
        description: 'WorldFest is one of downtown Louisville\'s most exciting cultural festivals - after a year off due to the pandemic, this year\'s celebration will not dissapoint! The festival is happening September 3rd through the 6th, at the <strong>Belvedere event space at 141 N 6th Street</strong>. The food, drinks, music, and dancing will be incredible all weekend long - just make sure you\'re there Saturday at 4pm to hear all your New Orleans Brass Band favorites!',
        timecode: '04 Sep 2021 20:00:00 GMT'
    },

    {
        title: 'John Roy\'s Ovation Orchestra',
        date: 'Sunday, September 5th, 2021 7-9pm',
        description: 'Come hear free traditional big band swing across the river in <strong>Warder Park at 109 E Court Ave, Jeffersonville, Indiana.</strong> Bring lawn chairs or a blanket - and don\'t forget snacks and drinks!',
        timecode: '05 Sep 2021 20:00:00 GMT'
    },

    {
        title: 'Harlem of the South Soiree',
        date: 'Friday, September 17th, 2021 6pm',
        description: 'Join Russell: Place of Promise at Norton Sports and Learning Complex located at 3029 W Muhammad Ali Blvd for the Harlem of the South Soiree! Louisville Jazz Initiative artists will kick off this fantastic event with a mix of old and new jazz: standards representing Harlem and the Harlem Renaissance side by side with original compositions by local composers.',
        timecode: '17 Sep 2021 20:00:00 GMT'
    },

    {
        title: 'Public Conert at the Portland Library',
        date: 'Saturday, October 16th, 2021 2-4pm',
        description: 'Join the Louisville Jazz Initiative for a free public performance at the Portland branch of the Lousiville Free Public Library at 3305 Northwestern Pky. This concert will feature some of the top jazz professionals in town playing new, original music by local composers - you won\'t want to miss it!',
        timecode: '16 Oct 2021 20:00:00 GMT'
    },

    {
        title: 'Old Lou\'s Ragtime Band',
        date: 'Saturday, October 23rd, 2021 4-6pm',
        description: 'Come to <strong>TEN20 Brewery at 1020 E Washington St</strong> to enjoy some good food and even better beer, all while listening to early jazz music from Old Lou\'s Ragtime Band!',
        timecode: '23 Oct 2021 20:00:00 GMT'
    }

]

//Check events for modernity and insert only upcoming events into HTML

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