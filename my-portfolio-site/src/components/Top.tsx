const Top = () => {

    return (
        /* TOP */
        <section id="top">
            
            {/* 3D MODEL */}
            <div className="experience">
                <canvas className="experience-canvas" width={"250px"} height={"250px"}></canvas>
            </div>

            {/* hero-image */}
            <div className="hero">
                <img src="../assets/images/work_01.png" height={"100%"} width={"100%"} />
            </div>
            
            <div className="hero-title">
                <h1>MIZUKI JINDO</h1>
                <p>3DCG DESIGNER / ENGINNER</p>
            </div>

        </section>
    )
}

export default Top;
