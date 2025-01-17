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
        <div>Home</div>
        <div>Jobs</div>
        <div>Testimonials</div>
        <div>Contact us</div>
      </div>
      <div>Work Seekers</div>
    </div>
  );
}

export default Nav;