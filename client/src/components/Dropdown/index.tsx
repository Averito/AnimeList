import React, {
	FC,
	MouseEventHandler,
	PropsWithChildren,
	useRef,
	useState
} from 'react'
import Link from 'next/link'
import classnames from 'classnames'

import styles from './Dropdown.module.scss'
import { useOutside } from '@hooks/useOutside'
import { defineEmits } from '@helpers/defineEmits'

export interface DropdownMenu {
	id: number
	label: string
	href?: string
	onClick?: MouseEventHandler<HTMLDivElement>
}

interface DropdownProps {
	options: DropdownMenu[]
	clickMod?: boolean
	margin?: string
	onOpen?: () => unknown
	onClose?: () => unknown
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
	options,
	clickMod,
	onOpen,
	onClose,
	margin,
	children
}) => {
	const [active, setActive] = useState<boolean>(false)

	const emit = defineEmits<'open' | 'close'>({
		open: onOpen ?? (() => {}),
		close: onClose ?? (() => {})
	})

	let timeout: ReturnType<typeof setTimeout>
	const onMouseEnter: MouseEventHandler<HTMLDivElement> = () => {
		clearTimeout(timeout)
		setActive(true)
		emit('open')
	}
	const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
		timeout = setTimeout(() => {
			setActive(false)
			emit('close')
		}, 200)
	}

	const open: MouseEventHandler<HTMLDivElement> = event => {
		event.stopPropagation()
		if (active) {
			setActive(false)
			emit('close')
			return
		}

		setActive(true)
		emit('open')
	}

	const dropdownChildren = useRef<HTMLDivElement>(null)
	useOutside(dropdownChildren, () => {
		if (!clickMod) return
		setActive(false)
		emit('close')
	})

	const dropdownMenuActive = active
		? clickMod
			? styles.dropdownMenuOnClickMod
			: styles.dropdownMenuOn
		: styles.dropdownMenuOff

	const marginStyle = { margin }

	return (
		<div
			onMouseEnter={!clickMod ? onMouseEnter : undefined}
			onMouseLeave={!clickMod ? onMouseLeave : undefined}
		>
			<div
				ref={dropdownChildren}
				style={marginStyle}
				onClick={clickMod ? open : undefined}
			>
				{children}
			</div>
			<div className={styles.dropdownWrapper}>
				<div className={classnames(styles.dropdownMenu, dropdownMenuActive)}>
					{options.map(option => (
						<React.Fragment key={option.id}>
							{option.href ? (
								<div className={styles.menuItem} onClick={option.onClick}>
									<Link href={option.href}>{option.label}</Link>
								</div>
							) : (
								<div className={styles.menuItem} onClick={option.onClick}>
									{option.label}
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	)
}
