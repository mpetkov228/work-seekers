import { Link } from "react-router";

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 20
};

function Nav() {
  return (
    <div style={styles}>
      <div>Work Seekers</div>
      <div style={{ display: 'flex', gap: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact us</Link>
      </div>
      <div>Work Seekers</div>
    </div>
  );
}

export default Nav;