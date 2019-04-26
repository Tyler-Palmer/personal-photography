import React, { Component } from "react";
import Slide from "./Slide";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import "./../../styles/slider.scss";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://lh3.googleusercontent.com/KQpThLzZikRUPoyGpsgy-bDYOaVXmLkLKVU_elA--MxpXiqyzMO5mJm2o_o9C6jiM7W3Sh1iYgfar6YTG008MzmB2yvR0f0pLCMi9Dr1OQpsqjYmBBE12XSZvWtH_2KQEkXCCahu46_zNmL3zSYqp8ujcQuckxe5fa3j0IxLBDIbwaC89kWRTpiwlPT6fzwnqG0X-PJUnyMDCu6vM6hgPfik-85WRKqSGJ2dogcuVv-6vAnXoPZlEL1YKBsGLZ_8ZFAM_EG8wrifCiCvKW8dJb23I1B2_5z8a0Mc9m3-VDKWueDtWV4NY2okfo7GLyNAwZTUJv-l2MwVJ75vtd9UsmQn1roSF01vBWac5M6sQPLeYr4vHJKLWp5drcP1DvGi5uNUXFDr6Iwsx_1didJhTyjTfs40fRM2GWlahTC-HEeM2MVdgKe8yQiO-bCb0Sz4nlOi7eDe31JlxE0w0e1mYi4li4FzfAFuzVzNPTnlEdtE1XuMbT8p7M-Yh_DWRRf5ZI8ltgCWIiPERai-bhpSTlMm7WRqoOJ_Wrk2ebMqAIhf3Y2OjKKQ0CfN_rF55fVWpjK-vVD6HsoYtDCu9-lLbTfvtpEAmd2ubEsfnCte9adZ5H8Z36soig6-Tbm5e2Zy2zXO0bpdxbgtWb8hfHJWIrs4FIj4X30=w1080-h608-no",
                "https://lh3.googleusercontent.com/y7Fg6h_iufOvClbPyaMPNwPshBZY5RQMdJgf1qQxNqSiKmDJqVY_zLMzD5-2qtVpmjpcprFJRNo3Fzxvxtvt0NphlySSlw1ptXvqYc1tVBnyCzuVEDgxYWGqNuYfn9FxaYvoYtMnGr_OjqDRgqy6TUZRF4PEuRbH9umJZcvMjQr7bGmXXuJsJMhl59Je46DIJeqns1ZvrXLgZ4mFmF2v7aScR0bGQUNzR2-yjr3HyY1p6jdQvLdfSO36KI9i2Q0KLGkisBUTABTbCho20XPtIXoFya0lUIcQB0CISZxuPUAJqr2o4HBj8hhIN1XviXH9Xcch-AOcTlmJcutXmli_8QB_fuucd8ENvDi2jkvVDIrcIzNCqK3nt3PJx5OiYlcI5L-ID41k5_xEUApjgvj_tuZsxamFhCZroK9dcFzPAE27XiojAPCbyeWFKb4QunZCeFekCf36Qu3JYS66ZsWhV1MJu4iwRpa_kSF9VZIvts8T7BF8-C4rotua8EQDZCDBZWRHpNqmvO2hWlpgET8Te-sPKdX8S0ERuiQ86MWlXMwyWzprrVP66o26iyECgkDyfoCQwI7r5Hn8h_cwS2i8IUc-RLTkQ5gsKw6r4jowvBZnufzDXyiqbtk7TR5vC-J8XAZO_7tEcDms60DiaPGremQ2_xY72Ms=w1080-h370-no",
                "https://lh3.googleusercontent.com/898sKvCFzn7K88Rn3Aj4FnwNM1urN9yRcJ19B8JuHUjZQWMeZyEAtu1_xF4nP9gOiMrGmdQhVNKwbKwDo07HkfRyMEDqMMCXCEP1ppiCAXO50kWeH5Hi5GwwOYO5F6oO3Xn0BcWs52S5NwUQCzpE-eaSlMSO4g_VlN7scEV7gFQjo1kCDAjtGH4rreqmTIJ4oVxBuRLZ2wCT2XLaRRf9iNVcNZO3hy9lRr1Tc0mkgxJME2xcPp3jquqflAEDJhWYK4inAxnyvLg16TRuYOX47_xLsq9JWr4MDMfobaeN86ML7hTsLPK1pb9DS91G2GEzUrs53T3Vig6R4O8Buw_cIu28i9cQDwcU8fgx_AyFowtAhRxW26ZMrNDls1fg0336hpyHAqSALDqlQl2HiRarn5H_GhlSE7aDzVLWUqAJaCv4yEJA4plDYicS3KKFk2wNvKe46Yh3bpjeGrZs2TSadRoaDn7wUsnRSg0aZvjB1qr2t3B_dtyKg2-GowSYO5CON5A5SeRaPg-CO_8OZg3Cy7rhOkbBynzcy7caXjqeTHHV_jpAV2kpbRTsuHAAB1maFE3TDw7duPgYxj3gEAiB8640RlQqbUiD1Pid--If-vo0e8zIaGI_qzCWOObstpJjeGz_P4rBUOpwQJtc1QyyIqP8eQcswCk=w1080-h581-no",
                "https://lh3.googleusercontent.com/gAgcq5SsRkADbGoJNh8GWFhg8ct3fPgPRiehslXsxsASfbnDPuZ8HXMvBilV2KdijqTMClHgT9pvsPA7TFw7fJPZ2Dtd7CSZb3H37rv1xZZoT6s7pEezLh0cM3TZyG3JrcRxBH8O7X1XF0dvcYYOQij-aZ_E-EQpW1bh-VeSufaZmmOvsnElzXt6rFlGqeLSO6ZtFW3nybQhlVHO80o7QETjOMvM71JkLFTyHUHZMjmaeirOeE9ECYCzqZBL-cnKhAGqfFucHUI3lH33YwqpoLvTfCfXI9r5BhfPd86HeZIV0LWuD3FbS8-QbGsDOP_Dbivrp4FXSkAvnEQzZUQ8Ovo4WctDOuagk4QhP5zgHpKi7gy_rwOXxiQois2lr7EaptGTnSIG0UYnlP5aT1tQmiSOX0u112yc2u1kZkYyUej6YGXhsoKKvCY9xxT4WYzKobKAFf7nyEkTefmoU5eYrQ3xQjRFverJENCVRSGfnkWU7n_UVluKZ-wzLYxcO0uCLyC6oN8h2j67moKKaTV6gN1EDzBsYoOIkVHMWGGEnhMg1j3G2a-skKc_2iLuakWqM8X0ywHcqVPK-CPAOsXeyPuVHJDIwFy7DqP5XcCb54ntI8BpLnmWWfPGyOdJqVJh_4xJsLb6P0T3U7kf0_0iuY1HUuV9320=w1280-h672-no",
                "https://lh3.googleusercontent.com/mKuEmUI4L7W9rlPyCg4LUPXT4fHQk-42B5zuKmR8IHNetpMqWYohAWvsxFOYQUGCUK3k5AqVAQghqMIVsr7zQIyo41VN3AnOS04GGV_9jhdDqfKh8VIDRQhqOA_selRE0cuutEkwYqT86S6kSv3_ASttgGuFbggvaWwvKb491qcXD_tJ6clDkEdoNzf01HJtAHxkg3-k-o96kk6B-2j7330R0bUIzd64nWQH2Ol8yv71oaAqekFH4VZ6Iv_Jupq8hq6AOMcNeSW24rIEsx3pA4A9gwWPtvgSOa2KfQRs-EYuR_e1xZ6j_Br-6q8WSQ2nCqrDUUTEaX2rDM0LNE-jDG7osfSce8FDZEy_UPvDx_F5fic9AaksMMNIEtQTESuqYwKyutZBzxUdX_W08CiVpCSHmunSL9JUp466AIcALF2l-4agact8WRCo12Kg4m-j5jwR4G3YfAY0WIYe4GMJgWF-WWk09-riQky7KO1RFDeYDauM_D_82POxeHmJDqinCQCjbkxLjSbCItaE9Z8vd-m6Lcbbdb_6I-D_9mDsTPcRuwP3bLhLorvwt7EQBwGHvABKK5SOrEeUOBw2Vd7pFjDxZ4ape8YU0XHCgXQ7RYPjD_TZ9SRmyU2WG_3ENCEOiQ1lT55VRsos5K0Td1iL2RxxDhg7SxE=w1225-h689-no"
            ],
            currentIndex: 0,
            translateValue: 0
        };
    }

    prevSlide = () => {
        this.state.currentIndex === 0
            ? this.setState({
                  currentIndex: this.state.images.length - 1
              })
            : this.setState(prevState => ({
                  currentIndex: prevState.currentIndex - 1
              }));
    };
    nextSlide = () => {
        this.state.currentIndex === this.state.images.length - 1
            ? this.setState({
                  currentIndex: 0,
                  translateValue: 0
              })
            : this.setState(prevState => ({
                  currentIndex: prevState.currentIndex + 1,
                  translateValue: prevState.translateValue + -this.slideWidth()
              }));
    };

    slideWidth = () => {
        return document.querySelector(".slide").clientWidth;
    };

    render() {
        return (
            <div className="slider">
                <div
                    className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: "transform ease-out 0.45s"
                    }}
                >
                    {this.state.images.map((image, i) => (
                        <Slide key={i} image={image} />
                    ))}
                </div>
                <div className="arrow-box">
                    {/* <RightArrow nextSlide={this.nextSlide} />
                    <LeftArrow prevSlide={this.prevSlide} /> */}
                </div>
            </div>
        );
    }
}

export default Slider;
