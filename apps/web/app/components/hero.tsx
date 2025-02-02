import type { HeroFragment } from "@/sanity/hero";
import Link from "next/link";

interface HeroProps extends HeroFragment {}

export function Hero({ title, subtitle, image }: HeroProps) {
	return (
		<div className="relative pt-14">
			<div
				aria-hidden="true"
				className="-top-40 -z-10 sm:-top-80 absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="-translate-x-1/2 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				/>
			</div>
			<div className="py-24 sm:py-32 lg:pb-40">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-balance font-semibold text-5xl text-gray-900 tracking-tight sm:text-7xl">
							{title}
						</h1>
						<p className="mt-8 text-pretty font-medium text-gray-500 text-lg sm:text-xl/8">
							{subtitle}
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								href="#"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
							>
								Get started
							</Link>
							<Link href="#" className="font-semibold text-gray-900 text-sm/6">
								Learn more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
					<div className="mt-16 flow-root sm:mt-24">
						<div className="-m-2 lg:-m-4 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:rounded-2xl lg:p-4">
							<img
								alt={image.alt}
								src={image.url}
								width={2432}
								height={1442}
								className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="-z-10 absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="-translate-x-1/2 relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				/>
			</div>
		</div>
	);
}
