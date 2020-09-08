import React, { Component } from 'react'
import '../AboutMe/AboutMe.scss'

export class AboutMe extends Component {
    render() {
        return (
            <section className="section1">
                <h1>About me<span>...</span></h1>
                <h3>
                    I have recently graduated from Mayden Academy in Bath. Having completed their Full-Stack Track intensive course. <br/>
                    <br/>As well as learning the fundamentals of programming, I worked within an agile team of eight students, taking on projects in JavaScript, React, Node js, PHP and Object-Orientated Programming. During this time, I also became a Certified ScrumMaster.
                    <br/>
                    <br/>
                    Being from Cornwall, I'm naturally an outdoorsy kinda person.<br/>
                    When I'm not on my laptop, I enjoy sea swimming, kayaking, walking <s>to the pub</s> with my dog or just getting out and exploring somewhere new.
                    Online, I have a strong interest in Javascript and JS frameworks, particularly ReactJS.
                    The best way to learn is by doing, so I can also be found building mini projects and expanding my knowledge of a particular subject.
                </h3>
            </section>    
        )
    }
}

export default AboutMe
