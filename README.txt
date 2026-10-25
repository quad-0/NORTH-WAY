NORTH WAY - APP PACKAGE
=====================

What is in this folder
- index.html            the guide (Arabic, English and French)
- manifest.webmanifest  tells phones this is an installable app
- sw.js                 lets the guide open with no signal
- icon-*.png, apple-touch-icon.png   the app icon

IMPORTANT: the app only installs when the folder is online at an https:// address.
Opening index.html straight from your phone files will NOT make it installable.

STEP 1 - Put it online (free). Pick one:

A) Netlify Drop (easiest, best on a computer)
   1. Go to app.netlify.com/drop
   2. Drag the whole unzipped folder onto the page
   3. You get a link like https://something.netlify.app

B) GitHub Pages (works from a phone browser)
   1. Make a free GitHub account and a new public repository
   2. Upload all the files in this folder (not the zip itself)
   3. Settings > Pages > Deploy from branch > main > Save
   4. Your link appears after a minute

C) Replit
   1. New project > HTML
   2. Add every file from this folder
   3. Press Run, then Deploy for a permanent link

STEP 2 - Install on a phone
- Android (Chrome): open your link, tap the "Install app" bar in the guide
  (or the menu > Install app).
- iPhone (Safari): open your link, tap Share > Add to Home Screen.

STEP 3 - Check it
- The icon appears on the home screen and opens without the browser bar.
- Switch to Arabic and check the layout flips right to left.
- Turn on airplane mode and open it again. It should still open.

HOW TO REMOVE THE EXAMPLE FLIGHTS AND ADD REAL NEWS
- Open index.html in any text editor and search for "EDIT YOUR CONTENT HERE".
- The app has six sections: Qlay3at flights, Beirut flights, Hotels, Taxis, Tourist
  sites and Travel info. The search box looks inside all of them.
- FLIGHTS, HOTELS and TAXIS: delete the lines marked example:true, then add real
  entries by copying a line and changing the words. The "Example data" label
  disappears by itself when no example is left.
- SITES: three verified places are included, each with its source. Add more the same way.
- BEIRUT: this section links to the airport's own flight page (BEIRUT_URL). Check
  the link now and then, because websites change.
- List a hotel or taxi only with the owner's agreement.
- NEWS STRIPE: the moving line at the top comes from TICKER. One block per news item, with the text in Arabic, English and French, and its source. Empty the list to hide the stripe.
- OFFICIAL AIRPORT PAGE: when the airport or its operator launches an official website or booking page, put the link in QYT_URL. A button then appears in the Qlay3at flights section.
- HISTORY: the app has a History tab. Add each episode of the history series to EPISODES (title, date, short text, and a link to the video or article). The TIMELINE holds key dates.
- NOTICES: add one entry per announcement (there is a sample line in the comment).
- Save the file and upload it again to your host.
- Or send the announcement to Claude and ask it to update the file for you.

LEGAL SETUP (do this before launch)
- In index.html, find "var SITE" and fill in owner (your name or business) and contact
  (an email or WhatsApp number). People use it to report errors or ask for removals.
- Update the "updated" date every time you change the content.
- The About and legal section is a general starting point, not legal advice. Ask a
  Lebanese lawyer to review it, and to check the name and any plan to earn money.
- Do not add airline, airport or government logos without written permission.
- Mark paid or sponsored listings clearly, as the page promises.

BEFORE YOU SHARE IT
- Replace the example flights, add real notices, and check drive times.
- Add real phone numbers and places for parking, food and hotels.
- Keep the "unofficial guide" notice.

LATER (optional)
- Google Play version: upload your link to pwabuilder.com and follow its steps.
  Google charges a one-time developer fee (check the current price).
- Apple App Store: needs a paid Apple developer account and a Mac.
- Push notifications: need a Firebase or OneSignal setup. Not included yet.

- WEATHER AND DISTANCE: a weather card sits on the main screen (Qlayaat, Tripoli, Beirut) with the next 3 days. Data comes from Open-Meteo, whose free plan is for non-commercial use. Check their terms, or switch to a paid plan, before you sell listings. A "How far is the airport from me?" button asks for the visitor's location and shows distance and rough car and walking times. The location stays on the phone. To change the places, edit WX_PLACES in index.html.

- COUNTDOWN: the "In N days" card on the main screen counts down to the first flight (COUNTDOWN in index.html). It disappears the day after.
- SHARE: the Share button uses the phone's share sheet, or WhatsApp. After northwaylb.com works, put "https://northwaylb.com" in SITE.url.
- USEFUL NUMBERS: edit the NUMBERS list. Add the airport number when it exists.
- READY BUT HIDDEN (they appear by themselves when you add content):
  WHATSAPP_URL = your WhatsApp channel link -> "News on WhatsApp" button.
  EVENTS = festivals and markets -> "Events" tab (past events hide by themselves).
  PHRASES = Arabic phrases -> "Phrases" tab with a Hear it button.
  lat and lng on a hotel, taxi or site -> a "Directions" link on its card.
  Hearts on hotels, taxis and sites are already live. Saved places appear in a "Saved" tab on that phone only.

- PAGES: each tab opens as its own page. The Home button (top left) and the phone's Back button return to the main screen.
- NORTHY: the star helper. It knocks on the screen for 2 seconds when the app opens, then stays as a small star at the bottom corner. Tap it to chat. It answers from the information inside the app (flights, weather, numbers, taxis, hotels, sites, history, distance). It is not a live AI model yet.
  To connect a real AI later, put your AI service address in AGENT_URL. The app sends it {message, lang} and expects {reply} back. If you do, update the privacy text, because messages will then leave the phone.

- KNOCK SOUND: NORTHY's knock on the glass is made by the phone itself (see knockSound in index.html). Some browsers keep sound off until the person touches the screen. In the installed app it normally plays.

----- NEW IN THIS VERSION -----
* Countdown: after the announced date it switches to "The announced date has passed" with a "See flights" button.
  To hide it completely, set COUNTDOWN.date to "".
* Share previews: WhatsApp and social links now show the North Way card (share.png, 1200x630). Link previews are cached by the apps,
  so a new image can take a day to appear.
* Hotels, Taxis, Events and Phrases show a "Coming soon" label until the first entry is added.
* Photos: add  imgs:["photos/name.jpg"]  (up to 5) and imgCredit:"Owner name"  to any hotel, taxi or site entry. Files go in the photos folder.
  Extra fields for listings: featured:true (Featured tag, shown first), offer:{en:"..",ar:"..",fr:".."}, whatsapp:"96170123456".
* Google Sheet content system: set CONTENT_URL to the Web app address (see SETUP-GOOGLE-SHEET.txt). Sections that have approved rows in the sheet
  replace the built-in sections. If the sheet is unreachable the app uses its last saved copy, then the built-in content.
* Install banner: shows the right instructions for Android, iPhone and in-app browsers, can be closed, and stays closed for 14 days.
