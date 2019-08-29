import React from 'react'

function Hero({heroname})
{
    // eslint-disable-next-line
    if(heroname=="joker")
    throw new Error("Not a hero");
return(
    <div>
      Hero class  {heroname}
    </div>
)
}
export default Hero;