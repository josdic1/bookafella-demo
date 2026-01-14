import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Login() {
    const { handleLogin } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [showHelp, setShowHelp] = useState(false);

    // Demo users
    const demoAdmin = { id: "r4gt", member: "admin", role: "admin" };
    const demoUser = { id: "ed65", member: "josh", role: "user" };

    const loginAs = (user) => {
        handleLogin(user);
        navigate('/home');
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>📅 Bookafella</h1>
                    <p className="login-subtitle">Private Members Club Reservation System</p>
                </div>

                <div className="login-body">
                    <h2>Demo Login</h2>
                    <p>Select a role to explore the app:</p>
                    
                    <div className="login-buttons">
                        <button 
                            className="btn btn-admin" 
                            onClick={() => loginAs(demoAdmin)}
                        >
                            <span className="btn-icon">👑</span>
                            <span className="btn-text">
                                <strong>Login as Admin</strong>
                                <small>Full access to all features</small>
                            </span>
                        </button>
                        
                        <button 
                            className="btn btn-member" 
                            onClick={() => loginAs(demoUser)}
                        >
                            <span className="btn-icon">👤</span>
                            <span className="btn-text">
                                <strong>Login as Member</strong>
                                <small>Book reservations as Josh</small>
                            </span>
                        </button>
                    </div>
                </div>

                <div className="login-footer">
                    <button className="help-link" onClick={() => setShowHelp(true)}>
                        ❓ How does this app work?
                    </button>
                </div>
            </div>

            {/* Help Modal */}
            {showHelp && (
                <div className="modal-overlay" onClick={() => setShowHelp(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowHelp(false)}>&times;</button>
                        
                        <h2>📅 About Bookafella</h2>
                        
                        <p>A reservation management system for exclusive private members clubs.</p>
                        
                        <h3>👑 Admin Features:</h3>
                        <ul>
                            <li>View and manage all reservations</li>
                            <li>Add, edit, and remove members</li>
                            <li>Full CRUD access to all data</li>
                        </ul>
                        
                        <h3>👤 Member Features:</h3>
                        <ul>
                            <li>Book new reservations</li>
                            <li>View and manage your bookings</li>
                            <li>Edit your profile</li>
                        </ul>
                        
                        <div className="modal-note">
                            <strong>Demo Mode:</strong> Changes are saved during your session but reset on page refresh.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;