import React from "react";
import "./style.css";

function Footer () {
    return (
        <>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                    <strong>Dog Blogg</strong> by <a href="https://jgthms.com">MVP</a>. The source code is licensed by
                    <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. View About Us to see creators: <a href="/AboutUs">About Us</a>.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;