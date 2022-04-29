//List of events

const events = [

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
        if ( html.length < 1 ) html = `<span class="no-gigs">Nothing on the books right now - check back soon for updates!</span>`;  
        eventList.innerHTML = html;
}


//Execute

insertEvents();