import React from "react";
import "./style.css";

function Footer () {
    return (
        <>
            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                    <strong>Dog Blog</strong> by <a href="https://jgthms.com">MVP</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;