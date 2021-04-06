import React from 'react'
import "./Blog.css"

function Blog() {
    return (
        <>
            <section className="section">
                <div className="container">

                    <div className="tile is-ancestor">
                        <div className="tile is-parent">
                            <article className="tile is-child green post">
                                <a className="post__category" href="">Animals</a>
                                <h2 className="post__title">Blog #1</h2>
                                <div className="post__content">Awesome APP</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                        </div>

                        <div className="tile is-6 is-parent">
                            <article className="tile is-child pink post">
                                <a className="post__category" href="">Other</a>
                                <h2 className="post__title">Blog #2</h2>
                                <div className="post__content">Great Work</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                        </div>

                        <div className="tile is-vertical is-parent">
                            <article className="tile is-child blue post">
                                <a className="post__category" href="">travel</a>
                                <h2 className="post__title">Blog #3</h2>
                                <div className="post__content">Cras aliquam sit amet turpis eget sodales. Praesent scelerisque aliquet rhoncus. Nunc rhoncus eros vehicula, sollicitudin ligula quis, ullamcorper nisl.</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                            <article className="tile is-child gold post">
                                <a className="post__category" href="">holidays</a>
                                <h2 className="post__title">Blog #4</h2>
                                <div className="post__content">Nulla neque tortor, posuere eget euismod sit amet, auctor non odio. Nulla quis aliquam nibh. Donec maximus metus nec posuere commodo.</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                        </div>
                    </div>

                    <div className="tile is-ancestor">
                        <div className="tile is-6 is-parent">
                            <article className="tile is-child gray post">
                                <a className="post__category" href="">technology</a>
                                <h2 className="post__title">Blog #5</h2>
                                <div className="post__content">Duis mattis ex nisi, lobortis lacinia ipsum suscipit in. Quisque sed leo at purus eleifend porttitor. Quisque ultricies, erat a fringilla efficitur, urna arcu sodales erat, ac auctor mauris velit at elit. Duis fringilla diam egestas diam vehicula
                                auctor. Cras non bibendum ex. Integer tempor mollis dignissim. Maecenas egestas tortor mi, in egestas mi vulputate vel. Suspendisse in mollis odio, et aliquet orci. Vivamus eleifend facilisis venenatis. Etiam lobortis nec turpis suscipit ullamcorper.
            Nunc vel lorem ac turpis luctus malesuada. Etiam vulputate vitae ex nec interdum. Maecenas condimentum volutpat turpis sed vulputate. Mauris egestas hendrerit fermentum. Proin non lacus dolor. Nulla ac hendrerit ante.</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                        </div>

                        <div className="tile is-vertical is-parent">
                            <article className="tile is-child blue post">
                                <a className="post__category" href="">trends</a>
                                <h2 className="post__title">Blog #6</h2>
                                <div className="post__content"> Etiam ante tortor, faucibus sit amet gravida eget, accumsan et metus. Morbi sem metus, suscipit ac diam eget, aliquam pharetra est. Duis hendrerit nibh vel mi rhoncus sagittis. Suspendisse et lectus cursus.</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                            <article className="tile is-child gold post">
                                <a className="post__category" href="">music</a>
                                <h2 className="post__title">Blog #7</h2>
                                <div className="post__content">Praesent rutrum turpis vitae massa dictum rhoncus. Nullam vel purus velit. Ut posuere velit quis arcu aliquet.</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                        </div>

                        <div className="tile is-parent">
                            <article className="tile is-child red post">
                                <a className="post__category" href="">fashion</a>
                                <h2 className="post__title">Blog #8</h2>
                                <div className="post__content">Duis mattis ex nisi, lobortis lacinia ipsum suscipit in. Quisque sed leo at purus eleifend porttitor. Quisque ultricies, erat a fringilla efficitur, urna arcu sodales erat, ac auctor mauris velit at elit.</div>
                                <a className="post__permalink" href="">Learn more</a>
                            </article>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Blog
