import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Slider = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('dashboard'); // Track the current page

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        // <div className={`wrapper ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

        <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${isSidebarOpen ? 'open' : ''}`}>
            <a href="#" className="brand-link">
                {/* <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} /> */}
                <span className="brand-text font-weight-light">eRMC</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Micheal</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link" onClick={() => setCurrentPage('dashboard')}>
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/operators' className="nav-link" onClick={() => setCurrentPage('operators')}>
                                <i className="nav-icon fas fa-users"></i>
                                <p>Operators</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/regulators' className="nav-link" onClick={() => setCurrentPage('regulators')}>
                                <i className="nav-icon fas fa-cog"></i>
                                <p>Regulators</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        // </div >

    )
}

export default Slider