import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Operators = () => <div>Operators Page</div>;
const Regulators = () => <div>Regulators Page</div>;

const Dashboard2 = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('dashboard'); // Track the current page

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'operators':
                return <Operators />;
            case 'regulators':
                return <Regulators />;
            default:
                return <h2>Welcome to the Dashboard</h2>;
        }
    };

    return (
        <div className={`wrapper ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

            {/* Content Wrapper */}
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#" onClick={() => setCurrentPage('dashboard')}>Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            {/* Small boxes */}
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            {/* Additional boxes */}
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Render the current page based on the state */}
                <div className="content">{renderPage()}</div>
            </div>

            {/* Footer */}
            <footer className="main-footer">
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.1.0
                </div>
            </footer>
        </div>
    );
};

export default Dashboard2;
