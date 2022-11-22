/* eslint-disable */
import "./Statistics.css"
import Ecom1 from "./Statistics_Ecom_1.PNG"
import Ecom2 from "./Statistics_Ecom_2.PNG"
import Ecom3 from "./Statistics_Ecom_3.PNG"
import Ecom4 from "./Statistics_Ecom_4.PNG"
import Ecom5 from "./Statistics_Ecom_5.PNG"
import Ecom6 from "./Statistics_Ecom_6.PNG"
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Statistics = ()=>{

    const { ref: FirstSection, inView: FirstSectionIsVisible } = useInView();
    const { ref: SecondSection, inView: SecondSectionIsVisible } = useInView();
    const { ref: ThirdSection, inView: ThirdSectionIsVisible } = useInView();
    const { ref: ForthSection, inView: ForthSectionIsVisible } = useInView();
    const { ref: FifthSection, inView: FifthSectionIsVisible } = useInView();
    const { ref: SixthSection, inView: SixthSectionIsVisible } = useInView();
    const { ref: LastSection, inView: LastSectionIsVisible } = useInView();

    const ElementBlog = document.getElementsByClassName("Statistics-GraphDetail");

    useEffect(()=>{
        if(FirstSectionIsVisible){ElementBlog[0].classList.remove("FadeOut"); 
                                  ElementBlog[0].classList.add("FadeIn");}
            if(!FirstSectionIsVisible){ElementBlog[0].classList.remove("FadeIn");
                                       ElementBlog[0].classList.add("FadeOut");}
    },[FirstSectionIsVisible])

        useEffect(()=>{
            if(SecondSectionIsVisible){ElementBlog[1].classList.remove("FadeOut"); 
                                       ElementBlog[1].classList.add("FadeIn");}
                if(!SecondSectionIsVisible){ElementBlog[1].classList.remove("FadeIn");
                                            ElementBlog[1].classList.add("FadeOut");}
        },[SecondSectionIsVisible])

    useEffect(()=>{
        if(ThirdSectionIsVisible){ElementBlog[2].classList.remove("FadeOut"); 
                                  ElementBlog[2].classList.add("FadeIn");}
            if(!ThirdSectionIsVisible){ElementBlog[2].classList.remove("FadeIn");
                                       ElementBlog[2].classList.add("FadeOut");}
    },[ThirdSectionIsVisible])

        useEffect(()=>{
            if(ForthSectionIsVisible){ElementBlog[3].classList.remove("FadeOut"); 
                                    ElementBlog[3].classList.add("FadeIn");}
                if(!ForthSectionIsVisible){ElementBlog[3].classList.remove("FadeIn");
                                        ElementBlog[3].classList.add("FadeOut");}
        },[ForthSectionIsVisible])

    useEffect(()=>{
        if(FifthSectionIsVisible){ElementBlog[4].classList.remove("FadeOut"); 
                                  ElementBlog[4].classList.add("FadeIn");}
            if(!FifthSectionIsVisible){ElementBlog[4].classList.remove("FadeIn");
                                       ElementBlog[4].classList.add("FadeOut");}
    },[FifthSectionIsVisible])

        useEffect(()=>{
            if(SixthSectionIsVisible){ElementBlog[5].classList.remove("FadeOut"); 
                                    ElementBlog[5].classList.add("FadeIn");}
                if(!SixthSectionIsVisible){ElementBlog[5].classList.remove("FadeIn");
                                        ElementBlog[5].classList.add("FadeOut");}
        },[SixthSectionIsVisible])

    useEffect(()=>{
        if(LastSectionIsVisible){ElementBlog[6].classList.remove("FadeOut"); 
                                  ElementBlog[6].classList.add("FadeIn");}
            if(!LastSectionIsVisible){ElementBlog[6].classList.remove("FadeIn");
                                       ElementBlog[6].classList.add("FadeOut");}
    },[LastSectionIsVisible])
      

    return(
        <div className="StatisticsDiv">
            
            <div className="StatisticsDiv-header">is E-commerce about to be the first pick?</div>

            <div ref={FirstSection} className="Statistics-GraphDetail">
                <div className="Statistics-Graph">
                    <img className="Statistics-Graph-pic" src={Ecom1} alt=""/>
                    <p>Source : https://www.drip.com/blog/e-commerce-statistics</p>
                </div>
                <div className="Statistics-Detail" >
                    <h3>Statistics of E-commerce Visitors</h3>
                    <p style={{marginTop:"0"}}>Online shopping is getting bigger each year.
                    With the Covid19 pandemic, more consumers are going online to buy everything from groceries to luxury items.
                    As a result, Statista estimates that there will be 2.14 billion global buyers online by the end of 2021.</p>
                </div>
            </div>

            <div ref={SecondSection} className="Statistics-GraphDetail">
                <div className="Statistics-Detail">
                    <h3>Percentage of Visits convert into Purchases</h3>
                    <p style={{marginTop:"0"}}>Although the total number of potential digital buyers is increasing worldwide, 
                    the conversion rate from a visitor into a customer saw a slight decrease in the third quarter of 2020.</p>
                </div>
                <div className="Statistics-Graph">
                    <img className="Statistics-Graph-pic" src={Ecom2} alt=""/>
                    <p>Source : https://www.drip.com/blog/e-commerce-statistics</p>
                </div>
            </div>

            <div ref={ThirdSection} className="Statistics-GraphDetail">
                <div className="Statistics-Graph">
                    <img className="Statistics-Graph-pic" src={Ecom3} alt=""/>
                    <p>Source : https://www.drip.com/blog/e-commerce-statistics {"(* = Forecast)"}</p>
                </div>
                <div className="Statistics-Detail" >
                    <h3>Shares of E-Commerce in Retail Sales</h3>
                    <p style={{marginTop:"0"}}>Notice the big jump from 13.6 percent in 2019.
                    The projections for the future look especially bright for e-tailers. 
                    The share of e-commerce sales is expected to reach 19.5 percent by the end of 2021 year, 
                    and 21.8 percent in 2024. </p>
                </div>
            </div>

            <div ref={ForthSection} className="Statistics-GraphDetail">
                <div className="Statistics-Detail">
                    <h3 style={{marginLeft:"60px"}}>68 percent of Online Shoppers google for Product info before Purchasing</h3>
                    <p style={{marginTop:"0"}}>Although the total number of potential digital buyers is increasing worldwide, 
                    the conversion rate from a visitor into a customer saw a slight decrease in the third quarter of 2020.</p>
                </div>
                <div className="MiddleDiv"></div>
                <div className="Statistics-Graph">
                    <img className="Statistics-Graph-pic" src={Ecom4} alt=""/>
                    <p>Source : https://www.drip.com/blog/e-commerce-statistics</p>
                </div>
            </div>

            <div ref={FifthSection} className="Statistics-GraphDetail">
                <div className="Statistics-Graph">
                    <img className="Statistics-Graph-pic" src={Ecom5} alt=""/>
                    <p>Source : https://www.drip.com/blog/e-commerce-statistics {"(* = Forecast)"}</p>
                </div>
                <div className="Statistics-Detail" >
                    <h3 style={{marginRight:"20px"}}>Digital and Mobile wallets account for 45 percent of E-Commerce Payments</h3>
                    <p style={{marginTop:"-25px"}}>A recent study found that digital and mobile wallets, such as PayPal, Apple Pay, 
                    and Google Pay, accounted for almost 45 percent of global e-commerce transactions in 2020. What’s more, 
                    digital wallets are expected to increase their share in 2024 and reach up to 51.7 percent, 
                    by taking a big percentage off of traditional payment methods, such as credit cards, bank transfers, and cash on delivery.</p>
                </div>
            </div>

            <div ref={SixthSection} className="Statistics-GraphDetail">
                <div className="Statistics-Detail">
                    <h3 style={{marginLeft:"60px"}}>However,The Average Cart abandonment rate is 69.80 percent</h3>
                    <p style={{marginTop:"0"}}>If there’s one e-commerce metric you need to pay close attention to month after month, 
                    it’s your shopping cart abandonment rate. A higher than average cart abandonment rate should set off alarm bells 
                    as it might hint at a critical problem in your store. According to Baymard Institute’s latest data, 
                    the average cart abandonment rate across industries is 69.89 percent.</p>
                </div>
                <div className="Statistics-Graph">
                    <img className="Statistics-Graph-pic" src={Ecom6} alt="" style={{height:"400px"}}/>
                    <p>Source : https://www.drip.com/blog/e-commerce-statistics</p>
                </div>
            </div>

            <div ref={LastSection} className="Statistics-GraphDetail">
                <div>
                    <h3 className="Statistics-Con-header">Conclusion</h3>
                    <p className="Statistics-Con-detail">The consumer's habit changes towards a more convenient way of settlement. 
                    So E-commerce is becoming Popular. However, Some scam could easily infiltrate the process such as Payment scam, 
                    Unmatched Product Quality. Therefore, E-commerce would not be able to always be the first choice but to be 
                    the alternative instead. As the Cart Abandonment percentage can be seen high</p>
                </div>
            </div>

        </div>
    )
}

export default Statistics;