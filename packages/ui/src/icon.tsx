import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import {
	ArrowsClockwise,
	Check,
	CloudArrowUp,
	Fingerprint,
	List,
	Lock,
	X,
} from "@phosphor-icons/react/dist/ssr";

const Icons = {
	"cloud-arrow-up": CloudArrowUp,
	"arrows-clockwise": ArrowsClockwise,
	check: Check,
	fingerprint: Fingerprint,
	lock: Lock,
	list: List,
	x: X,
};

interface IconProps extends PhosphorIconProps {
	name: keyof typeof Icons;
}

function Icon({ name, ...props }: IconProps) {
	const Comp = Icons[name];
	return <Comp className="shrink-0" {...props} />;
}

export { Icon, type IconProps };
