import Image from 'next/image'

export default function Header({ title, subtitle, icon }) {
  return (
    <div className="header">
      <div className="header-icon">
        {icon && icon.startsWith('/') ? (
          <Image src={icon} alt="Icon" width={35} height={35} />
        ) : (
          <i className={icon} style={{ color: 'white', fontSize: '1.8rem' }}></i>
        )}
      </div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
