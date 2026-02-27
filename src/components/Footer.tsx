interface FooterProps {
  businessName: string;
}

function Footer({ businessName }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <div className="container">
        <p>&copy; {currentYear} {businessName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;