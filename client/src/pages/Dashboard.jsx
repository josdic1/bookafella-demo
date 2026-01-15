// src/components/Dashboard.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ReservationContext from "../contexts/ReservationContext";
import MemberContext from "../contexts/MemberContext";

function Dashboard() {
    const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
    const { reservations, loading: reservationsLoading } = useContext(ReservationContext);
    const { members, loading: membersLoading } = useContext(MemberContext);
    const navigate = useNavigate();
    const [showHelp, setShowHelp] = useState(false);

    // Combine loading states
    const isLoadingData = reservationsLoading || membersLoading;

    // --- Authentication Check ---
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
        return null;
    }

    // --- Role Determination ---
    const isAdmin = currentUser.role === 'admin';
    const currentMemberId = currentUser.id;

    // --- Initial Loading State ---
    if (isLoadingData) {
        return (
             <div className="loader">
                <p>Loading dashboard data...</p>
                <div className="loader-spinner"></div>
            </div>
        );
    }

    return (
        <div className="dashboard-container">
            {/* Floating Help Button */}
            <button
                onClick={() => setShowHelp(true)}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                    zIndex: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.6)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.4)';
                }}
            >
                ?
            </button>

            <h1 className="text-primary-heading">
                Welcome back, {currentUser.member?.charAt(0).toUpperCase() + currentUser.member?.slice(1)}
            </h1>

            {isAdmin ? (
                // ==== ADMIN DASHBOARD VIEW ====
                <div className="admin-dashboard-content">
                    <div className="card">
                        <h2>Admin Control Panel Overview</h2>
                        <p>You have full administrative privileges to manage bookings and members.</p>
                        <div className="summary-section">
                            <h3>Summary:</h3>
                            <p>Total Reservations: <strong>{reservations.length}</strong></p>
                            <p>Total Members: <strong>{members.length}</strong></p>
                        </div>
                    </div>

                    <div className="card">
                        <h3>Quick Actions:</h3>
                        <ul className="action-list">
                            <li><button className="btn btn-primary" onClick={() => navigate('/reservationlist')}>View All Reservations</button></li>
                            <li><button className="btn btn-secondary" onClick={() => navigate('/memberlist')}>Manage All Members</button></li>
                            <li><button className="btn btn-primary" onClick={() => navigate('/new/reservation')}>Create New Reservation</button></li>
                        </ul>
                    </div>
                </div>
            ) : (
                // ==== REGULAR USER DASHBOARD VIEW ====
                <div className="user-dashboard-content">
                    <div className="card">
                        <h2>Your Personal Overview</h2>
                        <p>Access your profile and manage your personal reservations quickly.</p>
                    </div>

                    <div className="card">
                        <h3>Your Information:</h3>
                        <ul className="action-list">
                            <li>
                                <button className="btn btn-warning" onClick={() => navigate(`/edit/member/${currentMemberId}`)}>Edit My Profile</button>
                                <span className="text-secondary" style={{ marginLeft: '1rem' }}>Role: {currentUser.role}</span>
                            </li>
                        </ul>
                    </div>

                    <div className="card">
                        <h3>Your Reservations:</h3>
                        <ul className="action-list">
                            <li><button className="btn btn-primary" onClick={() => navigate('/reservationlist')}>View My Reservations</button></li>
                            <li><button className="btn btn-secondary" onClick={() => navigate('/new/reservation')}>Make a New Reservation</button></li>
                        </ul>
                        <p className="reservation-count-summary">You have <strong>{reservations.filter(res => res.member_id === currentMemberId && new Date(res.arrival) >= new Date()).length}</strong> upcoming reservations.</p>
                    </div>
                </div>
            )}

            {/* Help Modal */}
            {showHelp && (
                <div className="modal-overlay" onClick={() => setShowHelp(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowHelp(false)}>&times;</button>
                        
                        <h2>📅 How Bookafella Works</h2>
                        
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            A reservation system for private members clubs and exclusive dining rooms.
                        </p>

                        {isAdmin ? (
                            <>
                                <h3>👑 Admin Capabilities</h3>
                                <ul>
                                    <li><strong>All Reservations</strong> - View, edit, and delete any booking</li>
                                    <li><strong>Member Management</strong> - Add new members, update profiles, remove accounts</li>
                                    <li><strong>Full Oversight</strong> - See upcoming and past reservations across all members</li>
                                </ul>
                            </>
                        ) : (
                            <>
                                <h3>👤 What You Can Do</h3>
                                <ul>
                                    <li><strong>Book Reservations</strong> - Select room, date, time, and party size</li>
                                    <li><strong>Add Guest Details</strong> - Include names and special notes (dietary needs, occasions)</li>
                                    <li><strong>Manage Bookings</strong> - View, edit, or cancel your reservations</li>
                                    <li><strong>Update Profile</strong> - Keep your member info current</li>
                                </ul>
                            </>
                        )}

                        <h3 style={{ marginTop: '20px' }}>🎯 Quick Tips</h3>
                        <ul>
                            <li>Use <strong>View Reservations</strong> to see upcoming and past bookings</li>
                            <li>Click <strong>View</strong> on any reservation to see full details including guest list</li>
                            <li>The <strong>Notes</strong> field is great for dietary restrictions or special requests</li>
                        </ul>
                        
                        <div className="modal-note">
                            <strong>Demo Mode:</strong> Changes save during your session but reset on page refresh.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;