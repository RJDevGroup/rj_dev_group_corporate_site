import React from 'react';
import ServiceCTAButton from '../../../components/ui/ServiceCTAButton';
import Icon from '../../../components/AppIcon';

const ServiceSection = ({
	id,
	title,
	description,
	buttonText,
	buttonId,
	trackingId,
	iconName,
	isReversed = false,
	backgroundColor = 'bg-background',
}) => {
	return (
		<section id={id} className={`py-20 lg:py-32 ${backgroundColor}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
				>
					{/* Content */}
					<div className={`${isReversed ? 'lg:col-start-2' : ''}`}>
						<div className="flex items-center mb-6">
							<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
								<Icon name={iconName} size={24} color="var(--color-primary)" />
							</div>
							<h2 className="text-3xl lg:text-4xl font-bold text-foreground font-mono">{title}</h2>
						</div>

						<p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
							{description}
						</p>

						<ServiceCTAButton
							id={buttonId}
							variant="default"
							size="lg"
							targetAction="contact"
							trackingId={trackingId}
							iconName="ArrowRight"
							iconPosition="right"
							iconSize={18}
							className="bg-primary hover:bg-secondary text-primary-foreground font-mono font-semibold"
						>
							{buttonText}
						</ServiceCTAButton>
					</div>

					{/* Visual Element */}
					<div className={`${isReversed ? 'lg:col-start-1' : ''}`}>
						<div className="relative">
							<div className="w-full h-80 lg:h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl corporate-shadow-lg flex items-center justify-center">
								<div className="text-center">
									<div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
										<Icon name={iconName} size={48} color="var(--color-primary)" />
									</div>
									<h3 className="text-xl font-semibold text-foreground font-mono">{title}</h3>
									<p className="text-muted-foreground mt-2">Professional Solutions</p>
								</div>
							</div>

							{/* Decorative Elements */}
							<div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full"></div>
							<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
