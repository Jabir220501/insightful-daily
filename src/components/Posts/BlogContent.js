import React from 'react'

function BlogContent(props) {
  return (
    <div id="content">
    <p className="text-sm md:text-lg tracking-widest leading-relaxed">
      We’ve been hearing a lot about loneliness, seeing as it’s recently
      been called a health epidemic on par with the pandemic. “Every
      single person has the fundamental need for connection,” said Kasley
      Killam, a social scientist and the executive director of Social
      Health Labs. I’ve seen first-hand how important community is for
      myself and my family; I know it’s literally and figuratively kept my
      nearly 98 year-old grandmother sprightly and alive all these years.
      I was on my way to visit my nearly 98-year old grandmother when I
      received an email from her asking if I would mind meeting 10 of her
      closest friends for a cocktail party. I thought to myself, “Wow, I
      hope I have 10 friends if or when I’m approaching 100.” I
      immediately answered “Yes!” with admiration. When I met these lovely
      ladies, they told me about their Tuesday night dinners, their gazebo
      meet-ups for wine after dinner, their bridge club, their established
      roles in the community (one was the sommelier, another was the
      community’s bocce champion, and my grandmother was the bridge
      shark), and their support for each other if someone got sick or
      needed help. The community that they had built was truly admirable.
      My grandmother and I are cut from the same cloth in our search for
      connection: We’ve tried to keep our family close-knit and have a
      love of bringing people together. She was adopted at a young age and
      in a constant pursuit of community; as an only child I followed
      closely in her footsteps. I remember seeing how much she thrived in
      her church community when I was a kid. I decided to go to Boston
      College, driven by the promise of the open arms of the Jesuit
      community. And that search kept going through my early New York City
      career days. It actually wasn’t until I became a mother that I found
      the community I had been searching for and learned how to
      authentically connect both at work and at home. But to this day, the
      anxiety of being the “lonely only” has always been a looming threat,
      so I continue to make connection a huge priority in my day-to-day
      work and the program I started.
    </p>
    <div className="mt-8 mb-10 text-sm text-cremeTxt md:mt-14 md:mb-14">
      <p>{props.published}</p>
    </div>
  </div>
  )
}

export default BlogContent