import { Dialog } from "@base-ui-components/react/dialog";
import { Icon } from "@business-management/ui/icon";
import Link from "next/link";

const navigation = [
	{ name: "Product", href: "#" },
	{ name: "Features", href: "#" },
	{ name: "Marketplace", href: "#" },
	{ name: "Company", href: "#" },
];

export default function Header() {
	return (
		<header className="absolute inset-x-0 top-0 z-50">
			<nav
				aria-label="Global"
				className="flex items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<Link href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<img
							alt=""
							src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
							className="h-8 w-auto"
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<Dialog.Root>
						<Dialog.Trigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer">
							<span className="sr-only">Open main menu</span>
							<Icon name="list" aria-hidden="true" className="size-6" />
						</Dialog.Trigger>
						<Dialog.Portal>
							<Dialog.Backdrop className="fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70" />
							<Dialog.Popup className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
								<div className="flex items-center justify-between">
									<Link href="#" className="-m-1.5 p-1.5">
										<span className="sr-only">Your Company</span>
										<img
											alt=""
											src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
											className="h-8 w-auto"
										/>
									</Link>
									<Dialog.Close className="-m-2.5 rounded-md p-2.5 text-gray-700">
										<span className="sr-only">Close menu</span>
										<Icon name="x" aria-hidden="true" className="size-6" />
									</Dialog.Close>
								</div>
								<div className="mt-6 flow-root">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="space-y-2 py-6">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</a>
											))}
										</div>
										<div className="py-6">
											<Link
												href="#"
												className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
											>
												Log in
											</Link>
										</div>
									</div>
								</div>
							</Dialog.Popup>
						</Dialog.Portal>
					</Dialog.Root>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm/6 font-semibold text-gray-900"
						>
							{item.name}
						</Link>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link href="#" className="text-sm/6 font-semibold text-gray-900">
						Log in <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</nav>
		</header>
	);
}
