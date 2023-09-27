import './MyLabel.css';

export interface Props {
	/**
	 * Text to Display
	 */
	label: string;
	/**
	 * Font Size
	 */
	size?: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * Cap all letters or nor
	 */
	allCaps?: boolean;
	/**
	 * Text Color based on classes
	 */
	color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
	/**
	 * Text Color based on color picker
	 */
	fontColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps, color, fontColor }: Props) => {
	return (
		<span className={`${size} ${color}`} style={fontColor ? { color: `${fontColor}` } : {}}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
