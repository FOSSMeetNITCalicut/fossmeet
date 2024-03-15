import styles2 from '@/app/sponsors/page.module.css';
import SectionTitle from '@/components/common/sectionTitle';
import styles from './Sponsors.module.css';
export default function Sponsors() {
	return (
		<div className='outer-margin'>
			<div className='inner-margin'>
				<SectionTitle
					title='Sponsors'
					tag='Event'
					image='/star.png'
				/>
				<div className={styles['sponsors-grid']}>
					<Sponsor
						imgSrc={'/nilenso.svg'}
						dotColor='#FF3D84'
						name='Nilenso'
						tier='🥇 GOLD TIER'
						link='https://nilenso.com/'
					/>
					<Sponsor
						imgSrc={'/foss_united.svg'}
						dotColor='#0F9C47'
						name='FOSS United'
						tier='🥈 SILVER TIER'
						link='https://fossunited.org/'
					/>
					<Sponsor
						imgSrc={'/fsf.svg'}
						dotColor='#FF3D84'
						name='Free Software Foundation'
						tier='🥈 SUPPORTER TIER'
						link='https://fsf.org/'
					/>
					<Sponsor
						imgSrc={'/Gnomelogo.svg'}
						dotColor='#FF3D84'
						name='GNOME'
						tier='🥈 SUPPORTER TIER'
						link='https://www.gnome.org/'
						scale={0.4}
					/>
				</div>
			</div>
		</div>
	)
}


export function Sponsor({ link, imgSrc, dotColor, name, tier, scale = 1 }) {
	return (
		<a href={link} target="_blank" rel="noreferrer noopener">
			<div className={styles2['sponsor']}>
				<div className={styles2['logo-container']}>
					<img
						style={{
							scale: scale,
						}}
						src={imgSrc}
						alt="company-logo"
						className={styles2['company-logo']}
					// width={100}
					// height={100}
					/>
				</div>
				<div className={styles2['sponsor-bottom']}>
					<div className=" flex items-center gap-[8px]">
						<div
							className={styles['circle']}
							style={{ backgroundColor: dotColor }}
						></div>
						<span className={styles2['company-name']}>{name}</span>
					</div>
					<div className={styles2['tier']}>{tier}</div>
				</div>
			</div>
		</a>
	)
}
