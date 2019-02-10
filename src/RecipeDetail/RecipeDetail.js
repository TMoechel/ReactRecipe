import React, { Component } from 'react';
import Title from '../Title/Title';
import Description from '../Description/Description';

class RecipeDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Title Title = {this.props.RecipeDetail.Title} />
                <Description Description = {this.props.RecipeDetail.Description}/>
            </div>
        )
    }
}

export default RecipeDetail;