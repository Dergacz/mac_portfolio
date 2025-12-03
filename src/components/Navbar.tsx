import { navIcons, getNavLinks } from '../constants'
import { useLanguage } from '../hooks/useLanguage'
import LangSwitcher from './LangSwitcher'

const Navbar = () => {
  const { t } = useLanguage()
  const navLinks = getNavLinks(t)

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">{t('portfolio.title')}</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt="icon" />
            </li>
          ))}
          <li>
            <LangSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
