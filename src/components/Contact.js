
const Contact = () => {
    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h2 className="fw-bold mb-3">Contact Us</h2>
                <p className="text-muted">
                    We’re always happy to assist you. Reach out to UrbanBite Tiffin Services through any of the following ways!
                </p>
            </div>

            <div className="border rounded p-4 mb-4 shadow-sm">
                <h4 className="fw-semibold mb-3">📍 Address</h4>
                <p className="mb-0">UrbanBite Tiffin Services</p>
                <p className="mb-0">Near City Center, Pune - 411001</p>
                <p>Maharashtra, India</p>
            </div>

            <div className="border rounded p-4 mb-4 shadow-sm">
                <h4 className="fw-semibold mb-3">📞 Phone</h4>
                <p className="mb-0">Customer Care: +91 98765 12345</p>
                <p>Support & Queries: +91 91234 56789</p>
            </div>

            <div className="border rounded p-4 mb-4 shadow-sm">
                <h4 className="fw-semibold mb-3">📧 Email</h4>
                <p className="mb-0">Orders & Subscriptions: orders@urbanbite.com</p>
                <p>General Enquiries: support@urbanbite.com</p>
            </div>

            <div className="border rounded p-4 mb-4 shadow-sm">
                <h4 className="fw-semibold mb-3">⏰ Operating Hours</h4>
                <p className="mb-0"><strong>Monday - Saturday</strong></p>
                <p className="mb-0">Breakfast: 7:30 AM - 10:00 AM</p>
                <p className="mb-0">Lunch: 12:30 PM - 3:00 PM</p>
                <p>Dinner: 7:30 PM - 10:30 PM</p>
            </div>

            <div className="border rounded p-4 mb-4 shadow-sm">
                <h4 className="fw-semibold mb-3">🌐 Social Media</h4>
                <p>Follow us to stay updated with latest menus, offers & exciting meal plans!</p>

                <ul className="list-unstyled">
                    <li className="mb-2">
                        <span className="fw-bold">Instagram:</span> @urbanbite.tiffins
                    </li>
                    <li className="mb-2">
                        <span className="fw-bold">Facebook:</span> UrbanBite Tiffin Services
                    </li>
                    <li>
                        <span className="fw-bold">WhatsApp:</span> +91 98765 12345
                    </li>
                </ul>
            </div>

            <div className="border rounded p-4 mb-4 shadow-sm">
                <h4 className="fw-semibold mb-3">🚚 Delivery Coverage</h4>
                <p>
                    We offer fast and reliable tiffin delivery across major areas in Pune including:
                </p>

                <ul>
                    <li>Kothrud</li>
                    <li>Viman Nagar</li>
                    <li>Hinjewadi</li>
                    <li>Karve Nagar</li>
                    <li>FC Road</li>
                </ul>

                <p className="mb-0">
                    More locations being added every month as we grow!
                </p>
            </div>

            <div className="border rounded p-4 shadow-sm">
                <h4 className="fw-semibold mb-3">💬 Customer Support</h4>
                <p>
                    If you face any issues with delivery, payments, or special requests,
                    feel free to reach out. Our team is active and ready to help!
                </p>
            </div>

        </div>
    );
};

export default Contact;
