function AboutPage(){
    // const dessai='./Images/shukri-flower.webp'
    
      return (
          <>
          <h1> About page </h1>
          <img src={require('./Images/shukri-flower.webp')}/>
          <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/LSwoIKsTgrs"
           title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen></iframe>
          
          </>
      )
}


export default AboutPage