import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";
import { signInAPI } from "../action";

const Container = styled.div`
	padding: 0 10px;
`;

const Nav = styled.nav`
	max-width: 1128px;
	margin: auto;
	padding: 12px 0 16px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	position: relative;

	& > a {
		width: 130px;
		height: 35px;
		@media (max-width: 768px) {
			padding: 0 5px;
		}
	}
`;

const Join = styled.a`
	font-size: 16px;
	padding: 12px 15px;
	text-decoration: none;
	border-radius: 25px;
	color: rgba(0, 0, 0, 0.5);
	margin-right: 8px;
	transition: all 250ms ease;
	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`;

const SignIn = styled.a`
	box-shadow: inset 0 0 0 1px #0a66c2;
	border-radius: 25px;
	color: #0a66c2;
	font-size: 16px;
	font-weight: 600;
	transition-duration: 167ms;
	line-height: 40px;
	padding: 10px 25px;
	text-align: center;
	background-color: transparent;
	&:hover {
		background-color: rgba(112, 181, 249, 0.15);
		box-shadow: inset 0 0 0 2px #0a66c2;
	}
`;

const Section = styled.section`
	display: flex;
	flex-wrap: nowrap;
	align-content: start;
	padding-bottom: 138px;
	padding-top: 40px;
	padding: 60px 0;
	position: relative;
	width: 100%;
	max-width: 1128px;
	align-items: center;
	margin: auto;
	gap: 10px;
	@media (max-width: 768px) {
		flex-wrap: wrap;
		justify-content: center;
	}

	& > img {
		height: 540px;
		@media (max-width: 768px) {
			width: 80vw;
			height: auto;
			margin: 20px 0;
		}
	}
`;

const Hero = styled.div`
	h1 {
		padding-bottom: 0;
		width: fit-content;
		font-size: 48px;
		color: #2977c9;
		font-weight: 200;
		line-height: 70px;
		margin-bottom: 20px;
		@media (max-width: 768px) {
			text-align: center;
			width: 100%;
			font-size: 25px;
			line-height: 1.25;
		}
	}
`;

const Form = styled.div`
	margin-top: 100px;
	width: 408px;
	@media (max-width: 768px) {
		max-width: 80vw;
		margin: 20px auto 0;
	}
`;

const Google = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	height: 56px;
	width: 100%;
	border-radius: 30px;
	box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0);
	border: none;
	vertical-align: middle;
	transition-duration: 167ms;
	font-size: 20px;
	color: rgba(0, 0, 0, 0.6);
	z-index: 0;
	&:hover {
		background-color: rgba(207, 207, 207, 0.25);
		color: rgba(0, 0, 0, 0.75);
		box-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%), inset 0 0 0 3px rgb(0 0 0 / 0%), inset 0 0 0 2px rgb(0 0 0 / 0);
	}
	img {
		margin-right: 25px;
	}
	@media (max-width: 768px) {
		margin: auto;
		font-size: inherit;
	}
`;

function Login(props) {
	return (
		<Container>
			{props.user && <Redirect to="/feed" />}
			<Nav>
				<a href="/">
					<img src="/images/login-logo.svg" alt="" />
				</a>
				<div>
					<Join>Join Now</Join>
					<SignIn>Sign In</SignIn>
				</div>
			</Nav>
			<Section>
				<Hero>
					<h1>Welcome to your professional community</h1>
					<Form>
						<Google onClick={() => props.signIn()}>
							<img src="/images/google.svg" alt="" />
							Sign in with Google
						</Google>
					</Form>
				</Hero>
				<img src="/images/login-hero.svg" alt="" />
			</Section>
		</Container>
	);
}

const mapStateToProps = state => {
	return {
		user: state.userState.user,
	};
};

const mapDispatchToProps = dispatch => ({
	signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
