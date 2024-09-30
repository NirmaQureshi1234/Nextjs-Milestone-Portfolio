import Link from "next/link";

const Foot = () => {
  return (
    <div className="footer">
      <p className="copyright">
        @NIRMA QURESHI | All Rights Reserved | Social Links
      </p>
      <div className="social-links">
        <Link
          href="https://www.linkedin.com/in/nirma-qureshi-28b91a311"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        |
        <Link
          href="https://github.com/NirmaQureshi1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        |
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
      </div>
    </div>
  );
};

export default Foot;
