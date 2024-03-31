import React from 'react';
import PropTypes from 'prop-types';

function SubscriptionDetails({ trialDays }) {
	const containerStyle = {
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
		borderLeft: '2px dotted gray',
		paddingLeft: '10px',
		fontFamily: 'Arial, sans-serif',
		fontSize: '14px',
		lineHeight: '1.6',
		color: '#333',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		paddingTop: '5px',
		paddingBottom: '15px',
		marginBottom: '10px',
	};

	const itemStyle = {
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
	};

	const iconStyle = {
		width: '20px', // Adjust the size of the icon as needed
	};

	const titleStyle = {
		fontWeight: 'bold',
		marginBottom: '5px',
	};

	// Replace the emojis with actual icons or SVGs as needed
	const subscriptionIcon = '📅'; // Placeholder icon
	const invoiceIcon = '🧾'; // Placeholder icon
	const trialIcon = '⏳'; // Placeholder icon

	const currentDate = new Date();
	const formattedCurrentDate = currentDate.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});

	const nextInvoiceDate = new Date(currentDate);
	nextInvoiceDate.setMonth(nextInvoiceDate.getMonth() + 1);
	const formattedNextInvoiceDate = nextInvoiceDate.toLocaleDateString(
		'en-US',
		{
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		},
	);
	const trialEndDate = new Date(currentDate);
	trialEndDate.setDate(trialEndDate.getDate() + trialDays);
	const formattedTrialEndDate = trialEndDate.toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	});
	return (
		<>
			<div className="container" style={containerStyle}>
				<div style={itemStyle}>
					<span style={iconStyle}>{subscriptionIcon}</span>
					<div>
						<div style={titleStyle}>Subscription starts</div>
						<div>{formattedCurrentDate}</div>
					</div>
				</div>
				<div style={itemStyle}>
					<span style={iconStyle}>{invoiceIcon}</span>
					<div>
						<div style={titleStyle}>First invoice</div>
						<div>Total depends on usage</div>
						<div>Bills on {formattedNextInvoiceDate}</div>
					</div>
				</div>
				<div style={itemStyle}>
					<span style={iconStyle}>{trialIcon}</span>
					<div>
						<div style={titleStyle}>Free trial</div>
						<div>{trialDays} day trial</div>
						<div>Ends on {formattedTrialEndDate}</div>
					</div>
				</div>
			</div>
		</>
	);
}

SubscriptionDetails.propTypes = {
	trialDays: PropTypes.number.isRequired,
};

export default SubscriptionDetails;
