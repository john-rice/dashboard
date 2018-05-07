import React, { Component } from "react";

import Introduction from "./screens/Introduction";
import ImportData from "./screens/ImportData";
import AppbaseFeatures from "./screens/AppbaseFeatures";
import Search from "./screens/Search";
import Facets from "./screens/Facets";

const screens = {
	0: Introduction,
	1: ImportData,
	2: Search,
	3: Facets,
	4: AppbaseFeatures,
};

export default class Onboarding extends Component {
	state = {
		currentScreen: 0,
		totalScreen: 5,
		thresholdScreen: 0, // to maintain the max threshold reached by currentScreen
		hasJSON: false,
		searchFields: [],
		facetFields: [],
		url: '',
	};

	nextScreen = () => {
		this.setState((state) => {
			const currentScreen = state.currentScreen + 1 < state.totalScreen
				? state.currentScreen + 1
				: state.currentScreen;

			return ({
				...state,
				currentScreen,
				thresholdScreen: currentScreen,
			});
		});
	};

	setScreen = (currentScreen) => {
		this.setState(state => ({
			...state,
			currentScreen: currentScreen <= state.thresholdScreen ? currentScreen : state.currentScreen,
		}));
	};

	importJSON = () => {
		this.setState({
			hasJSON: true,
		});
	};

	setURL = (url) => {
		this.setState({
			url,
		});
	};

	setSearchFields = (searchFields) => {
		this.setState({
			searchFields,
		});
	};

	setFacetFields = (facetFields) => {
		this.setState({
			facetFields,
		});
	};

	renderCurrentScreen = () => {
		const RenderScreen = screens[this.state.currentScreen];
		let props = {};

		if (this.state.currentScreen === 0) {
			props = {
				importJSON: this.importJSON,
				hasJSON: this.state.hasJSON,
			}
		} else if (this.state.currentScreen === 1) {
			props = {
				url: this.state.url,
				setURL: this.setURL,
			};
		} else if (this.state.currentScreen === 2) {
			props = {
				setSearchFields: this.setSearchFields,
				searchFields: this.state.searchFields,
			};
		} else if (this.state.currentScreen === 3) {
			props = {
				setFacetFields: this.setFacetFields,
				facetFields: this.state.facetFields,
				searchFields: this.state.searchFields,
			};
		}

		return <RenderScreen nextScreen={this.nextScreen} {...props} />;
	};

	render() {
		return (
			<div className="onboarding-wrapper">
				<div className="left">
					<ul>
						<li>
							<a
								className={this.state.currentScreen === 0 ? 'active' : null}
								onClick={() => this.setScreen(0)}
							>
								Create your first app
							</a>
						</li>
						<li>
							<a
								className={this.state.currentScreen === 1 ? 'active' : null}
								onClick={() => this.setScreen(1)}
							>
								Import Data into your app
							</a>
						</li>
						<li>
							<a
								className={this.state.currentScreen === 2 ? 'active' : null}
								onClick={() => this.setScreen(2)}
							>
								Set Searchable Fields
							</a>
						</li>
						<li>
							<a
								className={this.state.currentScreen === 3 ? 'active' : null}
								onClick={() => this.setScreen(3)}
							>
								Set Aggregation Fields
							</a>
						</li>
						<li>
							<a
								className={this.state.currentScreen === 4 ? 'active' : null}
								onClick={() => this.setScreen(4)}
							>
								Stream Realtime Updates
							</a>
						</li>
					</ul>
				</div>
				<div className="right">
					<div className="container">
						{this.renderCurrentScreen()}
					</div>
				</div>
			</div>
		);
	}
}
