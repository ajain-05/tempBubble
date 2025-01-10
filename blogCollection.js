const articleBank = [
    {
      title: "Understanding Artificial Intelligence: A Beginner's Guide",
      image: "ai.webp",
      link: "blog1.html"
    },
    {
      title: "Top 10 JavaScript Frameworks for Web Developers in 2025",
      image: "DALL·E 2025-01-06 19.25.10 - A sleek, dark-themed background for a tech blog, featuring abstract geometric shapes such as lines, squares, and hexagons that represent web developme.webp",
      link: "blog2.html"
    },
    {
      title: "Cybersecurity Best Practices for Businesses",
      image: "cyber.webp",
      link: "blog3.html"
    },
    {
      title: "The Future of Cloud Computing: Trends to Watch",
      image: "cloud.webp",
      link: "blog4.html"
    },
    {
      title: "Demystifying Blockchain Technology: How It Works",
      image: "block.jpeg",
      link: "blog5.html"
    },
    {
      title: "Essential Tools for Data Scientists in 2025",
      image: "office-scene-computer-screen-displaying-charts-graphs-vibrant-green-pink-accents-clean-professional-style-331490731.webp",
      link: "blog6.html"
    },
    {
      title: "Exploring Quantum Computing: The Next Frontier",
      image: "quantum 1.jpg",
      link: "blog7.html"
    },
    {
      title: "Building Scalable APIs: Best Practices for Developers",
      image: "api 1.webp",
      link: "blog8.html"
    },
    {
      title: "Mastering Git and GitHub: Version Control Made Easy",
      image: "github-6980894_1280.webp",
      link: "blog9.html"
    },
    {
      title: "Machine Learning in Healthcare: Transforming Patient Care",
      image: "doctor-with-technology-overlay.webp",
      link: "blog10.html"
    }
  ];
  
  const parent = document.querySelector(".featured")

  

  function Article(){
    const data = new Set()
    for(let i = 0; i<=10;i++){
        data.add(articleBank[i])
    }
    return [...data];
  }

  const article = Article()




  article.forEach((obj)=>{

    // pahla data obj me aaya: {title: "Understanding Artificial Intelligence: A Beginner's Guide",image: "ai.webp"}
    
    
    /***** div class crete *****/
    const div_element = document.createElement('div')
    div_element.className = 'box'

    /***** heading create karanagha *****/

    const heading = document.createElement('h3')
    heading.innerHTML = `${obj['title']}`

    div_element.appendChild(heading)

    /***** img create karna hai *****/
    const img = document.createElement('img')
    img.src = `${obj['image']}`
    img.alt = `${obj['title']}`
    div_element.appendChild(img)

    /***** anchor tagg create *****/
    const link = document.createElement('a')
    link.href = `${obj['link']}`
    link.target = "_blank"
    link.className = "readMore"
    link.textContent = "Read More..."

    div_element.appendChild(link)

    parent.appendChild(div_element)

    })