# Setup

- navigate to directory root and run `npm run start`, then go to `localhost:3000`
- if there is a problem with the above command, ensure Node.js and npm are installed on your system

# Configurable

    - In HeroBackground.js, there is a `scrollHandler`  function with variables for `lowerBound` and `upperBound`. Adjust those variables to set the start and stop points for the hero background to begin its opacity change from 1 to 0. These variables are integers and in pixels.

    - For TestimonialWidget.js, there is an `initialAnimationTime` variable that controls how long to stay on each testimonial.

    - For CountCard.js, there is a `scrollHandler` function that controls the count rate for the scrolling counter. There is an `initialCountValue` of 12000 and an `additionalCount` variable that takes the number of pixels scrolled, does somehthing to that number, then adds it to the initialCountValue and displays that sum on the card.

# TODO

    - final Button styling w/ :hover and :active effects

    - TestimonialWidget gradient overlay/text slide in and out
    - Stop TestimonialWidget on logo click (for some amount of time)

    - Final styling + real image for CountCard

    - Add functionality to email input/button + success state

    - Loading states for initial image loads

    MOBILE
        - scrolltext
        - testimonial widget

    Large Screens
        - font size adjustments
        - ...

    - add URLS to Header, Footer, and LinkLines

# For Gil / Integration to existing app

    - in CustomLink.js, there are instructions to import and use a <Link /> component (likely from react-router-dom or similar) and add it to the file. This should enable all the links on the new homepage to navigate appropriately.

    - Let me know if anything comes up :)
