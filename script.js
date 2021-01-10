//Variable
const timeline = document.querySelector('.timeline');
const switchOrder = document.querySelector('.switchOrder');
const decade = document.querySelectorAll('.decade');
const darkMode = document.querySelector('#darkMode');
const menu = document.querySelector('#menu');
const menuButton = document.querySelector('.burger');
const icon = document.querySelector('.burgerIcon');

//Functions
//print the events onto the page
const printTimeline = (array) => {
    let timelineEvents = 
    array.map((event) => { // 
        return `
        <div tabIndex="0" data-id="${event.year}" class="container ${event.left ? 'left' : 'right'}"> 
            <div class="content">
                <h2 class="year year--stroke year--shadow">${event.year}</h2>
                <h3>${event.title}</h3>
                <p>${event.text}</p>
                <img src="${event.imgSrc}" alt="${event.title}"/>
            </div>
        </div>
        `
    });
    timeline.innerHTML = timelineEvents.join('');
}

//change order of timeline
const handleClick = () => {
    //change the sides of the events, so that we start at the left
    if(!timelineArray[timelineArray.length - 1].left){
        timelineArray.forEach(event => {
            event.left = !event.left;
        });
    };
    printTimeline(timelineArray.reverse());
    switchOrder.textContent = timelineArray[0].year > 1922 ? 'View from oldest' : 'View from most recent';
}

//navigate by decades
const goToDecade = (e) => {
    //get the value of the clickevent
    const decadeSelected = parseInt(e.target.id);
    const decadeEnd = decadeSelected + 10;
    //create an array to store the relevent years, then push into it
    const decadeArray = [];
    timelineArray.map(event => {
        if (event.year >= decadeSelected && event.year < decadeEnd){
            decadeArray.push(event.year); 
        }
    })
    //go to the first element in that array
    const yOffset = -120; 
    const element = document.querySelector(`[data-id='${decadeArray[0]}']`);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

//toggle dark mode
const toggleMode = () => {
    document.body.classList.toggle('dark');
}

const noScroll = () => {
    window.scrollTo(0, 0);
}

//toggle dark mode
const toggleMenu = () => {
    menu.classList.toggle('visible');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    //disable scroll while menu is open
    if (menu.classList.contains('visible')){
        window.addEventListener('scroll', noScroll);
    } else {
        window.removeEventListener('scroll', noScroll);
    }
}

//initialize
const init = () => {
    printTimeline(timelineArray);
    //event listeners
    switchOrder.addEventListener('click', handleClick);
    decade.forEach(decade => decade.addEventListener('click', goToDecade));
    decade.forEach(decade => decade.addEventListener('keydown', goToDecade));
    darkMode.addEventListener('click', toggleMode);
    menuButton.addEventListener('click', toggleMenu);
}

//document ready :)
document.addEventListener("DOMContentLoaded", function() {
    init();
});

//array containing all events - side value is the side on which it will appear
timelineArray = [
{
    year: 1922,
    left: true,
    title:' J.W. AND A.J. BILLES: BROTHERS AND CO-FOUNDERS',
    text:'In 1922, two Toronto brothers, John W. and Alfred J. Billes, with a combined savings of $1,800, buy the Hamilton Tire and Garage Ltd. at the corner of Gerrard and Hamilton Streets in Toronto.',
    imgSrc: 'assets/1922.jpg'
},
{
    year: 1923,
    left: false,
    title: 'ON THE MOVE',
    text: "In 1923, Hamilton Tire and Garage Ltd. is closed and the Billes brothers move to the corner of Yonge and Gould in Toronto, under the name Canadian Tire Corporation.",
    imgSrc: 'assets/1923.png'
},
{   
    year: 1927,
    left: true,
    title: 'CANADIAN TIRE CORPORATION LIMITED OFFICIALLY INCORPORATED',
    text: '“We chose Canadian Tire,” co-founder A.J. Billes later recalled, “because it sounded big.”',
    imgSrc: 'assets/1927.png'
},
{   
    year: 1928,
    left: false,
    title: 'FIRST CATALOGUE PUBLISHED',
    text: 'J.W. and A.J. Billes produce their first catalogue featuring tire values on one side, and a handy roadmap of Ontario on the back.',
    imgSrc: 'assets/1928.png'
},
{   
    year: 1934,
    left: true,
    title: 'FIRST ASSOCIATE STORE',
    text: 'The store in Hamilton becomes the first officially designated Canadian Tire Associate Store, serving as a catalyst for the development of Canadian Tire’s highly successful nationwide Dealer-operated network of Canadian Tire Associate Stores.',
    imgSrc: 'assets/1934.png'
},
{   
    year: 1937,
    left: false,
    title: 'CLERKS ON ROLLER SKATES',
    text:' Canadian Tire’s main store moves into a vacant supermarket located at Yonge & Davenport Streets in Toronto. A.J. Billes introduces an innovation that delights generations of Toronto shoppers: clerks on roller skates who race to fill orders.',
    imgSrc:  'assets/1937.png'
},
{ 
    year: 1958,
    left: true,
    title: 'FIRST GAS BAR OPENS',
    text: 'Canadian Tire’s first gas bar opens at at the intersection of Yonge and Church Street in Toronto. Gas bar customers receive discount coupons, later known as Canadian Tire ‘Money’, redeemable on merchandise at Canadian Tire stores.', 
    imgSrc:  'assets/1958.png'
},
{   
    year: 1963,
    left: false,
    title: 'DISTRIBUTION CENTRE OPENS',
    text: 'Canadian Tire’s new Distribution Centre on Sheppard Avenue in Toronto opens.',
    imgSrc: 'assets/1963.png'
},
{   
    year: 1968,
    left: true,
    title: 'CANADIAN TIRE INTEGRATES FINANCIAL SERVICES',
    text: 'During the 1960s, Midland Shoppers Credit Limited, a small financial services firm offering third-party credit card processing for local retailers, begins adding Canadian Tire Associates Stores to its client list. By 1968, Midland was servicing Canadian Tire Associate Stores across Ontario, and then becomes a subsidiary of Canadian Tire Corporation, Limited, renamed as Canadian Tire Acceptance Limited.',
    imgSrc: 'assets/1968.png'
},
{   
    year: 1972,
    left: false,
    title: 'CANADIAN TIRE CELEBRATES 50 YEARS',
    text: 'Canadian Tire celebrates 50 years and the first store opens in the province of Saskatchewan.',
    imgSrc: 'assets/1972.png'
},
{   
    year: 1973,
    left: true,
    title: 'NEW DISTRIBUTION CENTRE IN BRAMPTON, ONTARIO',
    text: 'First phase of Canadian Tire’s new Distribution Centre in Brampton opens. The computer-controlled high-rise storage and retrieval complex is the first of its kind in Canada, with 65 million cubic feet of space.',
    imgSrc: 'assets/1973.png'
},
{   
    year: 1976,
    left: false,
    title: 'A.J. BILLES RECEIVES THE ORDER OF CANADA',
    text: 'A.J. Billes, co-founder of Canadian Tire, becomes a Member of the Order of Canada “for his contribution to the community of business, his concern for his employees and the sharing with them of his successes right from the very start.”',
    imgSrc: 'assets/1976.png'
},
{   
    year: 1980,
    left: true,
    title: 'CANADIAN TIRE CONTINUES TO GROW',
    text: 'Corporate gross operating revenue exceeds $1 billion for the first time and employees share $7,265,000 in profit sharing and share purchase bonuses. By 1981, Canadian Tire has 334 Associate Stores, a total of 116 gas bars and “Pit Stop” fast-lube facilities in Ontario and Quebec.',
    imgSrc: 'assets/1980.png'
},
{   
    year: 1991,
    left: false,
    title: 'A.J. BILLES DISTRIBUTION CENTRE OPENS',
    text: ' A.J. Billes Distribution Centre in Brampton opens. The state-of-the-art, 100-acre facility has 13 miles of conveyor belts and one mile of storage aisles.',
    imgSrc: 'assets/1991.png'
},
{   
    year: 1993,
    left: true,
    title: 'NEW-FORMAT STORE EXPANSION STRATEGY LAUNCHED ',
    text: 'Canadian Tire launches the most extensive store renewal and redevelopment program in Canadian retail history with the launch of its new-format store. The strategy serves to create an even more exciting & consistent customer shopping experience nationwide.',
    imgSrc: 'assets/1993.png'
},
{   year: 1995,
    left: false,
    title: 'CANADIAN TIRE FINANCIAL SERVICES LAUNCHES CANADIAN TIRE OPTIONS MASTERCARD',
    text: 'Canadian Tire Financial Services becomes the first non-deposit taking, financial institution worldwide to launch a MasterCard called Options MasterCard.',
    imgSrc: 'assets/1995.jpg'
},
{   year: 1997,
    left: true,
    title: 'CANADIAN TIRE CELEBRATES 75 YEARS OF SERVING CUSTOMERS',
    text: 'By 1997, 85 per cent of the Canadian population lives within a 15-minute drive of their local Canadian Tire store and nine out of ten adult Canadians shop at Canadian Tire at least twice a year.',
    imgSrc: 'assets/1997.png'
},
{   year: 1999,
    left: false,
    title: 'CANADIAN TIRE FOUNDATION FOR FAMILIES LAUNCHED',
    text: 'The Canadian Tire Foundation for Families is launched to provide a helping hand to families in need, to ensure that life’s basic needs are met: food, shelter, clothing and essential goods. Foundation for Families donated more than $28 million to help families and communities. In 2005, Canadian Tire Jumpstart Charities began operations to continue what Foundation for families had started. ',
    imgSrc: 'assets/1999.png'
},
{   
    year: 1999,
    left: false,
    title: 'PARTSOURCE STORES LAUNCHED',
    text: 'PartSource, a chain of automotive parts specialty stores launched in 1999. The stores are designed to meet the needs of major purchasers of auto parts – professional automotive installers and serious do-it-yourselfers.',
    imgSrc: 'assets/1999b.png'
},
{   
    year: 2000,
    left: true,
    title: 'CANADIAN TIRE LAUNCHES CANADIAN TIRE ‘MONEY’ ON THE CARD',
    text: 'Canadian Tire ‘Money’ on the Card mirrors Canadian Tire ‘Money,’ Canada’s oldest and most recognized customer loyalty program, and enables customers to earn Canadian Tire ‘Money’ everywhere they shop, anywhere in the world.',
    imgSrc: 'assets/2000.png'
},
{   
    year: 2001,
    left: false,
    title: 'WWW.CANADIANTIRE.CA BRINGS ONLINE SHOPPING TO CUSTOMERS',
    text: 'Canada’s most shopped general merchandise retailer brings its unique shopping experience online and quickly becomes one of the busiest e-commerce sites in the country.',
    imgSrc: 'assets/2001.png'
},
{   
    year: 2001,
    left: false,
    title: 'MARK’S WORK WEARHOUSE JOINS THE CANADIAN TIRE FAMILY',
    text: 'Canadian Tire acquires Mark’s Work Wearhouse, one of the country’s leading retailers of work, work-related, casual and active-wear categories, as well as healthwear and business-to-business apparel.',
    imgSrc: 'assets/2001b.png'
},
{   
    year: 2003,
    left: true,
    title: 'NEW CONCEPT 20/20 STORE FORMAT INCLUDED',
    text: 'Canadian Tire launches its newest store layout featuring ‘Driving,’ ‘Playing,’ ‘Living’ and ‘Fixing’ areas that represent Canadian Tire’s cornerstone businesses – automotive, leisure and sporting goods, hardware and tools, home décor, home maintenance and repair, outdoor loving and lawn and garden products.',
    imgSrc: 'assets/2003.png'
},
{   
    year: 2003,
    left: true,
    title: 'CANADIAN TIRE FINANCIAL SERVICES ESTABLISHES CANADIAN TIRE BANK',
    text: 'A wholly-owned subsidiary of Canadian Tire, Canadian Tire Bank provides greater marketing flexibility for its credit card operations and enable Canadian Tire to facilitate continued expansion into this high-growth bank card market.',
    imgSrc: 'assets/2003b.png'
},
{
    year: 2005,
    left: false,
    title: 'CANADIAN TIRE LAUNCHES JUMPSTART CHARITIES',
    text: 'Canadian Tire launches Canadian Tire Jumpstart to address an issue of national concern – the inactivity of children. National in scope, but local in its focus, Jumpstart helps kids in financial need participate in organized sport and recreation by providing funds to help offset the costs associated with playing sports such as registration fees, transportation and equipment.',
    imgSrc: 'assets/2005.jpg'
},
{   
    year: 2005,
    left: false,
    title: 'DEBBIE TRAVIS: EXCLUSIVE TO CANADIAN TIRE',
    text: 'Canadian Tire announces its exclusive partnership with Debbie Travis and soon after introduces the Debbie Travis paint palette, ready-to-assemble furniture and storage solutions. The collection uses an array of patterns, colours and textures to help create unique moods in any room in the home.',
    imgSrc: 'assets/2005b.png'
},
{
    year: 2006,
    left: true,
    title: 'CANADIAN TIRE ANNOUNCES PARTNERSHIP WITH NASCAR AND TSN',
    text: 'Canadian Tire, NASCAR and TSN launch a multi-year deal to bring the excitement and thrill of NASCAR to motor sport fans across the country. The NASCAR Canadian Tire Series is a national racing series and consists of 10-12 races from May to September at local racetracks across Canada. Past champions include Scott Steckly, driver of the #22 Canadian Tire car, Andrew Ranger and DJ Kennington.',
    imgSrc: 'assets/2006.png'
},
{
    year: 2008,
    left: false,
    title: 'CANADIAN TIRE UNVEILS ‘SMART’ STORE CONCEPT',
    text:  'The Canadian Tire ‘Smart’ store format, which offers additional space to automotive products, sporting goods, and tools while also offering a selection of Mark’s products, is introduced in Welland, Ontario and Orleans, Ontario.',
    imgSrc: 'assets/2008.png'
},
{   
    year: 2009,
    left: true,
    title: 'OPENING OF THE GENCO DISTRIBUTION CENTRE',
    text: 'In partnership with GENCO Distribution Systems, Canadian Tire opens the GENCO Distribution Centre in Coteau du Lac, Quebec (45 minutes outside of Montreal), which aims to supply Canadian Tire stores in Ontario, Quebec and Atlantic Canada.',
    imgSrc: 'assets/2009.png'
},
{   
    year: 2010,
    left: false,
    title: 'CANADIAN TIRE HOCKEY SCHOOL IS LAUNCHED',
    text: 'In partnership with the National Hockey League (NHL), Canadian Tire launches The Canadian Tire Hockey School (CTHS), the trusted source for Canadians in developing young hockey players as they progress through their hockey career. Stanley Cup winner and Olympic Gold Medallist Jonathan Toews is named CTHS founding member and official spokesperson.',
    imgSrc: 'assets/2010.png'
},
{   year: 2011,
    left: true,
    title: 'CANADIAN TIRE ACQUIRES THE FORZANI GROUP LTD.',
    text: 'Canadian Tire acquires The Forzani Group Ltd. (FGL Sports), the largest national sporting goods retailer in Canada. FGL’s multiple banners, including Sport Chek and Sports Experts, feature a large selection of both brand name and private-branded products.',
    imgSrc: 'assets/2011.png'
},
{   
    year: 2012,
    left: false,
    title: '90 YEAR ANNIVERSARY',
    text: 'Canadian Tire celebrates its 90th anniversary. Since its inception in 1922, Canadian Tire has grown into one of the most iconic brands in the country and holds a 98 per cent instant recognition among Canadians.',
    imgSrc: 'assets/2012.png'
},
{
    year: 2013,
    left: true,
    title: 'PARTNERSHIP WITH CANADIAN OLYMPIC COMMITTEE AND CANADIAN PARALYMPIC COMMITTEE',
    text:  'As the leading sports retailer in Canada, Canadian Tire Corporation announces one of the largest sports partnerships ever undertaken in Canada and becomes a premier national partner of the Canadian Olympic Committee and the Canadian Paralympic Committee.',
    imgSrc: 'assets/2013.png'
},
{   year: 2013,
    left: true,
    title: 'CT REIT COMPLETES ITS INITIAL PUBLIC OFFERING',
    text: 'CT REIT enters the market in October 2013 with one of the most successful Initial Public Offerings for a Canadian REIT in recent years. CT REIT is listed on the Toronto Stock Exchange under the symbol CRT.UN.',
    imgSrc: 'assets/2013b.jpg'
},
{   
    year: 2014,
    left: false,
    title:' MY CANADIAN TIRE ‘MONEY’ NEW DIGITAL LOYALTY PROGRAM',
    text: 'Canadian Tire unveils the next evolution of its iconic loyalty program with My Canadian Tire ‘Money.’ An easier way to earn points, My Canadian Tire ‘Money’ program allows shoppers to collect points through their Canadian Tire Mobile App, My Canadian Tire ‘Money’ card/key fob or simply by paying with a Canadian Tire Options Mastercard.',
    imgSrc: 'assets/2014.png'
},
{
    year: 2015,
    left: true,
    title: 'CANADIAN TIRE JUMPSTART CHARITIES’ MILLIONTH KID',
    text: 'After 10 years of operation, Jumpstart has grown into one of Canada’s largest charities and surpassed the incredible achievement of helping one million kids from families in financial need participate in sport and physical activity.',
    imgSrc: 'assets/2015.png'
},
{
    year: 2016,
    left: false,
    title: 'CONSUMER BRANDS DIVISION IS ESTABLISHED',
    text: 'With product innovation at the heart of Canadian Tire Corporation’s strateg y, in 2016 the Consumer Brands Division was created. This division is focused on improving design capabilities and creating unique and exclusive products.  Since its launch, we have added world-class brands including Golfgreen, Vermont Castings, Sher-Wood and Paderno to our portfolio.',
    imgSrc: 'assets/2016.png'
},
{   
    year: 2017,
    left: true,
    title: 'PLAY FINDS A WAY',
    text: 'Canadian Tire Corporation, in support of Jumpstart, commits $50M over five years to help give Canadian kids with disabilities access to sport and play.',
    imgSrc: 'assets/2017.png'
},
{
    year: 2018,
    left: false,
    title: 'TRIANGLE REWARDS' ,
    text:' CTC evolves its iconic loyalty program with the launch of Triangle Rewards, a completely redesigned, company-wide loyalty and credit card offering that serves as the foundation for engaging customers and creating new experiences. Members and Triangle Mastercard cardholders can collect Canadian Tire Money faster, redeem it at more places and receive personalized offers.',
    imgSrc: 'assets/2018.png'
},
{
    year: 2018,
    left: false,
    title: 'CTC ACQUIRES HELLY HANSEN',
    text: 'CTC acquires Helly Hansen, a leading global brand  in sportswear and workwear based in Oslo, Norway.',
    imgSrc: 'assets/2018b.png'
},
]
























