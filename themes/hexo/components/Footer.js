import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer>
      {/* <DarkModeButton/> */}

      <i className='fas fa-copyright' /> {`${copyrightDate}`} <span><br/>

      {siteConfig('BEI_AN') && <><i className='fas fa-shield-alt' /> <a className='mr-2'>{siteConfig('BEI_AN')}</a><br/></>}

      <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye'/><span className='px-1 busuanzi_value_site_pv'> </span>  </span>
      <span className='pl-2 hidden busuanzi_container_site_uv'>
        <i className='fas fa-users'/> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>Powered by <a href='https://github.com/tangly1024/NotionNext' className='dark:text-gray-300'>NotionNext {siteConfig('VERSION')}</a>.</p></span><br/>

    </footer>
  )
}

export default Footer
