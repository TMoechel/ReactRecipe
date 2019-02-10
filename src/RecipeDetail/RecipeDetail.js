import React, { Component } from 'react';
import Title from '../Title/Title';
import Description from '../Description/Description';

class RecipeDetail extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const {RecipeDetail} = this.props;
        return (
            <div>
                <Title Title = {RecipeDetail.Title} />
                <Description Description = {RecipeDetail.Description}/>
            </div>
        )
    }
}

export default RecipeDetail;