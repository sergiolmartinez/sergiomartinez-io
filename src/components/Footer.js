import React from 'react';


function Footer() {
  return (
    <div className="footer navbar-dark bg-dark">
        <div className="container">
            <div className="row">
                <div className='col-sm-4 footer-blocks'>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>
                        <a href='https://github.com/sergiolmartinez' className='ico-link'><i className="bi bi-github"></i></a>
                            </li>
                        <li className='list-inline-item'>
                            <a href='https://www.linkedin.com/in/sergio-martinez-45bbba1b' className='ico-link' ><i class="bi bi-linkedin"></i></a>
                            </li>
                    </ul>
                </div>
                <div className='col-sm-4 footer-blocks'>
                    
                </div>
                <div className='col-sm-4 footer-blocks'>
                    <p className=''>Copyright &#xA9; 2021</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;
