import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer>
      {/* <DarkModeButton/> */}

      

   {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a className='mr-2'>{siteConfig('BEI_AN')}</a><br/></>}

      

    </footer>
  )
}

export default Footer
