import React from 'react'
import intropic from '/src/assets/BLOGINTRO.jpg'
import ampte from '/src/assets/AMPTE2.jpeg'
import lesson from '/src/assets/LESSON.jpg'
import dull from '/src/assets/DULL.webp'
import learn from '/src/assets/LEARN.webp'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();
    return(
        <>
        <div className='home'>
            <div className='about-me'>
                <img src={ampte} alt="Ampte B Marak's picture."/>
                <h2>Why I Started This Blog.</h2>
                <p>Hi! I’m Ampte B Marak — a physics student and a self-taught web developer. Welcome to my blog — a space I created to help absolute beginners learn how to build websites, one simple step at a time.</p>
                <p>If you’ve ever thought:</p>
                <ul>
                    <li>“I want to make a website, but I have no idea how.”</li>
                    <li>“Coding looks too complicated.”</li>
                    <li>“I don’t come from a tech background — can I still learn this?”</li>
                </ul>
                <p>You’re not alone. I started with those same questions. And this blog is my way of saying: Yes, you can.</p>
            </div>
            <div className='intro'>
                <img src={intropic} alt='Coding in Laptop'/>
                <h2>From Physics to Programming.</h2>
                <p>As a physics student, I’ve always been curious about how things work from the tiniest particles to the biggest systems. That curiosity eventually led me into the world of web development.</p>
                <p>At first, it was just a side interest. I wanted to build a personal website. Then I discovered HTML. Then CSS. Then JavaScript. Before I knew it, I was building projects, solving problems, and realizing that web development is both a science and an art — just like physics.</p>
                <p>The more I learned, the more I wished there was a blog that explained things the way I needed: clear, beginner-friendly, and practical.</p>
                <p>So I decided to build it myself.</p>
            </div>
            <div className='lesson'>
                <img src={lesson} alt='Web development picture.'/>
                <h2>What You'll Learn on This Blog.</h2>
                <p>This blog is built for beginners. You don’t need to be from a tech background, and you don’t need expensive tools. If you can open a browser, you’re ready.</p>
                <p>Here's what I'll be sharing:</p>
                <ul>
                    <li> HTML, CSS & JavaScript tutorials (zero to hero, no jargon)</li>
                    <li> Mini projects to build your skills</li>
                    <li>Step-by-step learning paths</li>
                    <li>Free tools and resources for new developers</li>
                    <li>Common mistakes beginners make (and how to avoid them)</li>
                </ul>
            </div>
            <div className='dull'>
                <img src={dull} alt='Black white Laptop.'/>
                <h2>What Makes This Blog Different?</h2>
                <p>I’m not a senior developer or a coding bootcamp instructor. I’m a learner — just a little further down the path. That means I remember exactly what it’s like to be a beginner.</p>
                <p>Here, you’ll find:</p>
                <ul>
                    <li>Simple explanations</li>
                    <li>No intimidating tech speak</li>
                    <li>Real examples and hands-on code</li>
                    <li>And an honest voice that admits, “Yes, I struggled with this too.”</li>
                </ul>
            </div>
            <div className='learn'>
                <img src={learn} alt='Learning coding picture.'/>
                <h2>Let's Learn Together.</h2>
                <p>This blog is my journey — and I want it to be yours too. I’ll be posting tutorials, tips, and beginner-friendly lessons regularly. And I’d love for you to follow along, ask questions, or even share your wins with me.</p>
                <p>Thanks for stopping by, and welcome to your web development journey.</p>
                <button className='start' onClick={() =>navigate('/html')}>Start Learning</button>
            </div>
        </div>
        </>
    );
};

export default Home;