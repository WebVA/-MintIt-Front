import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import ShareDropdown from "@components/share-dropdown";
import ShareModal from "@components/modals/share-modal";
import Button from "react-bootstrap/Button";
import Anchor from "@ui/anchor";

const AuthorIntroArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src="/images/bg/bg-image-9.jpg"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>
            <div
                className={clsx(
                    "rn-author-area",
                    space === 1 && "mb--30 mt_dec--120",
                    className
                )}
            >
                <div className="container">
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-3">
                            <div className="author-wrapper">
                                <div className="author-inner">
                                    {data?.image?.src && (
                                        <div className="user-thumbnail">
                                            <Image
                                                src={data.image.src}
                                                alt={
                                                    data.image?.alt || data.name
                                                }
                                                width={140}
                                                height={140}
                                                layout="fixed"
                                            />
                                        </div>
                                    )}

                                    <div className="rn-author-info-content">
                                        <h4 className="title">{data.name}</h4>
                                        <a
                                            href="https://twitter.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="social-follw"
                                        >
                                            <i className="feather-twitter" />
                                            <span className="user-name">
                                                {data.twitter}
                                            </span>
                                        </a>
                                        <div className="follow-area">
                                            <div className="follow followers">
                                                <span>
                                                    {data.followers}{" "}
                                                    <a
                                                        href="https://twitter.com"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="color-body"
                                                    >
                                                        followers
                                                    </a>
                                                </span>
                                            </div>
                                            <div className="follow following">
                                                <span>
                                                    {data.following}{" "}
                                                    <a
                                                        href="https://twitter.com"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="color-body"
                                                    >
                                                        following
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="author-button-area">
                                            <span className="btn at-follw follow-button">
                                                <i className="feather-user-plus" />
                                                Follow
                                            </span>
                                            <button
                                                type="button"
                                                className="btn at-follw share-button"
                                                onClick={shareModalHandler}
                                            >
                                                <i className="feather-share-2" />
                                            </button>

                                            <div className="count at-follw">
                                                <ShareDropdown />
                                            </div>
                                            <Anchor
                                                path="/edit-profile"
                                                className="btn at-follw follow-button edit-btn"
                                            >
                                                <i className="feather feather-edit" />
                                            </Anchor>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row mb-5 col_textbox d-flex align-items-center">
                                <div className="col-md-6 col-lg-6">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse consequat
                                        vel diam ut eleifend. Morbi rhoncus eros
                                        tortor, id finibus velit dignissim nec.
                                        Ut tellus purus,
                                    </p>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="status-box">
                                                <div>FLOOR</div>
                                                <div>18.3</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="status-box">
                                                <div>LISTED</div>
                                                <div>1,007</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="status-box">
                                                <div>TOTAL VOL</div>
                                                <div>375.8K</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="status-box">
                                                <div>AVG SALE (24h)</div>
                                                <div>20.40</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="status-box">
                                                <div>OWNERs</div>
                                                <div>4,788</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="status-box">
                                                <div>TOTAL SUPPLY</div>
                                                <div>10K</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button>Mint Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

AuthorIntroArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        followers: PropTypes.string,
        following: PropTypes.string,
        image: ImageType,
    }),
};
AuthorIntroArea.defaultProps = {
    space: 1,
};

export default AuthorIntroArea;
