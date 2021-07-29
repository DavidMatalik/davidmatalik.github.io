import React, { Component } from "react";
import RecommendationDetails from "../components/RecommendationDetails";

class Recommendations extends Component {
    render() {
        let sectionName
        if (this.props.resumeBasicInfo) {
          sectionName = this.props.resumeBasicInfo.section_name.recommendations;
        }

        let recommendations
        if (this.props.resumeRecommendations) {
          recommendations = this.props.resumeRecommendations.map((reco, i) => {
            const title = reco.title;
            const text = reco.text;
            const image = reco.image;
            return <RecommendationDetails key={i} title={title} text={text} image={image} />
          })
        }

        return (
            <section id="recommendations">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span>{sectionName}</span>
                    </h1>
                    {recommendations}
                </div>
            </section>
        )
    }
}

export default Recommendations;
