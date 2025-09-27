import { Link } from "react-router-dom";

const Service = () => {
    return (
        <div className="service-area-1 space-top overflow-hidden" style={{ backgroundImage: "url('/assets/img/bg/service-bg1-1.png')" }} id="service-sec">
            <div className="container">
                <div className="row gy-30 gx-30">
                    {/* Section Title */}
                    <div className="col-xl-6 col-md-6">
                        <div className="title-area mb-0 text-left content-text-extra-style">
                            <span className="sub-title"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="img" /> What We Do</span>
                            <h2 className="sec-title">Our services that we provide</h2>
                            <p>We provide complete construction solutions, from general contracting and project management to residential, commercial, and industrial projects. Our services include renovations, remodeling, and ongoing maintenance, ensuring quality, efficiency, and timely delivery at every stage.</p>
                        </div>
                    </div>

                    {/* Pre-Construction Services */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 01</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-1.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Pre-Construction Services</Link></h4>
                                <p className="service-card_text">We assist clients right from the planning stage, ensuring their projects are designed and executed with maximum efficiency.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Feasibility studies and cost estimation</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Site analysis and evaluation</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Budget planning and value engineering</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Scheduling and project planning</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Design coordination and consultation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* General Contracting */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 02</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-2.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">General Contracting</Link></h4>
                                <p className="service-card_text">With over a decade of expertise, we take complete responsibility for delivering projects from start to finish.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Full project execution as per approved plans and specifications</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Skilled workforce and resource management</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />High-quality materials and modern construction techniques</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />On-time and within-budget delivery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Construction Management */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 03</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-3.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Construction Management</Link></h4>
                                <p className="service-card_text">Our dedicated team ensures smooth coordination at every stage of construction.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Planning and managing construction activities efficiently</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Monitoring timelines and quality standards</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Coordinating between clients, consultants, and subcontractors</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Ensuring cost-effective and timely project completion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Residential Construction */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 04</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-4.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Residential Construction</Link></h4>
                                <p className="service-card_text">We specialize in building homes that blend functionality, comfort, and modern design.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Luxury homes and custom villas</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Apartment complexes and housing schemes</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Renovations and extensions for existing homes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Commercial Construction */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 05</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-5.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Commercial Construction</Link></h4>
                                <p className="service-card_text">We deliver high-quality commercial projects that help businesses thrive.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Office buildings and corporate spaces</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Retail outlets and shopping complexes</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Hotels, restaurants, and hospitality projects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Industrial Projects */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 06</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-1.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Industrial Projects</Link></h4>
                                <p className="service-card_text">We construct durable and efficient industrial facilities tailored to client requirements.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Warehouses and distribution centers</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Manufacturing plants and factories</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Large-scale industrial infrastructure projects</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Renovations & Remodeling */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 07</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-2.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Renovations & Remodeling</Link></h4>
                                <p className="service-card_text">We transform existing spaces into modern, functional, and aesthetically pleasing environments.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Complete remodeling of homes and offices</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Interior and exterior upgrades</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Space optimization and redesign</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Maintenance Services */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 08</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-3.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Maintenance Services</Link></h4>
                                <p className="service-card_text">Our maintenance solutions ensure the long-term functionality and safety of your property.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Routine inspections and repairs</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Electrical, plumbing, and mechanical services</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Facility management and upkeep contracts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Management */}
                    <div className="col-xl-6 col-md-6">
                        <div className="service-card d-flex flex-column h-100">
                            <div className="service-card-shadow-text">SERVICES - 09</div>
                            <div className="service-card_content flex-grow-1">
                                <div className="service-card_icon">
                                    <img src="/assets/img/icon/service-icon1-4.png" alt="img" />
                                </div>
                                <h4 className="service-card_title"><Link to="/service-details">Project Management</Link></h4>
                                <p className="service-card_text">We provide complete project oversight to guarantee smooth execution from start to finish.</p>
                                <div className="checklist mb-35 mt-auto">
                                    <ul>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />End-to-end planning and scheduling</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Cost and resource management</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Quality assurance and safety compliance</li>
                                        <li><img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="img" />Continuous communication and reporting</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;
