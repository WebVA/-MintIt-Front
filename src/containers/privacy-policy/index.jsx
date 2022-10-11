import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";

const PrivacyPolicyArea = ({ className, space }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h4>Privacy Notice</h4>
                        <p>
                            This privacy notice forDocushield (doing business as
                            Mint-It) ( "<strong>Mint-It</strong> ," "
                            <strong>we</strong>," "<strong>us</strong>," or "
                            <strong>our</strong>" ), describes how and why we
                            might collect, store, use, and/or share ("
                            <strong>process</strong>") your information when you
                            use our services ("<strong>Services</strong>"), such
                            as when you:
                        </p>
                        <ol>
                            <li>
                                Visit our websiteatmintit.studio, or any website
                                of ours that links to this privacy notice
                            </li>
                            <li>
                                Engage with us in other related ways, including
                                any sales, marketing, or events
                            </li>
                        </ol>

                        <p>
                            Questions or concerns?Reading this privacy notice
                            will help you understand your privacy rights and
                            choices. If you do not agree with our policies and
                            practices, please do not use our Services. If you
                            still have any questions or concerns, please contact
                            us atadrian@docushield.app.
                        </p>

                        <h4>Summary Of Key Points</h4>

                        <p>
                            <strong>
                                This summary provides key points from our
                                privacy notice, but you can find out more
                                details about any of these topics by clicking
                                the link following each key point or by using
                                our table of contents below to find the section
                                you are looking for. You can also click here to
                                go directly to our table of contents.
                            </strong>
                        </p>

                        <p>
                            <strong>
                                What personal information do we process?
                            </strong>{" "}
                            When you visit, use, or navigate our Services, we
                            may process personal information depending on how
                            you interact withMint-Itand the Services, the
                            choices you make, and the products and features you
                            use. Click here to learn more.
                        </p>

                        <p>
                            <strong>
                                Do we process any sensitive personal
                                information?
                            </strong>{" "}
                            We do not process sensitive personal information.
                        </p>

                        <p>
                            <strong>
                                Do we receive any information from third
                                parties?
                            </strong>
                            We do not receive any information from third
                            parties.
                        </p>

                        <p>
                            <strong>How do we process your information?</strong>{" "}
                            We process your information to provide, improve, and
                            administer our Services, communicate with you, for
                            security and fraud prevention, and to comply with
                            law. We may also process your information for other
                            purposes with your consent. We process your
                            information only when we have a valid legal reason
                            to do so. Click here to learn more.
                        </p>

                        <p>
                            <strong>
                                In what situations and with whichparties do we
                                share personal information?
                            </strong>{" "}
                            We may share information in specific situations and
                            with specificthird parties. Click here to learn
                            more.
                        </p>

                        <p>
                            <strong>
                                How do we keep your information safe?
                            </strong>{" "}
                            We haveorganizationaland technical processes and
                            procedures in place to protect your personal
                            information. However, no electronic transmission
                            over the internet or information storage technology
                            can be guaranteed to be 100% secure, so we cannot
                            promise or guarantee that hackers, cybercriminals,
                            or otherunauthorizedthird parties will not be able
                            to defeat our security and improperly collect,
                            access, steal, or modify your information. Click
                            here to learn more.
                        </p>

                        <p>
                            <strong>What are your rights?</strong> Depending on
                            where you are located geographically, the applicable
                            privacy law may mean you have certain rights
                            regarding your personal information. Click here to
                            learn more.
                        </p>

                        <p>
                            <strong>How do you exercise your rights?</strong>{" "}
                            The easiest way to exercise your rights is by
                            filling out our data subject request form available
                            here , or by contacting us. We will consider and act
                            upon any request in accordance with applicable data
                            protection laws.
                        </p>

                        <p>
                            Want to learn more about whatMint-Itdoes with any
                            information we collect? Click here to review the
                            notice in full.
                        </p>

                        <h4>TABLE OF CONTENTS</h4>

                        <ul>
                            <li>
                                <a href="#">
                                    1. WHAT INFORMATION DO WE COLLECT?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    2. HOW DO WE PROCESS YOUR INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS
                                    YOUR PERSONAL INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    4. WHEN AND WITH WHOM DO WE SHARE YOUR
                                    PERSONAL INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    5. WHAT IS OUR STANCE ON THIRD-PARTY
                                    WEBSITES?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    6. DO WE USE COOKIES AND OTHER TRACKING
                                    TECHNOLOGIES?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    8. HOW LONG DO WE KEEP YOUR INFORMATION?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    9. HOW DO WE KEEP YOUR INFORMATION SAFE?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    10. DO WE COLLECT INFORMATION FROM MINORS?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    11. WHAT ARE YOUR PRIVACY RIGHTS?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    12. CONTROLS FOR DO-NOT-TRACK FEATURES
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC
                                    PRIVACY RIGHTS?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    14. DO WE MAKE UPDATES TO THIS NOTICE?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    15. HOW CAN YOU CONTACT US ABOUT THIS
                                    NOTICE?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    16. HOW CAN YOU REVIEW, UPDATE, OR DELETE
                                    THE DATA WE COLLECT FROM YOU?
                                </a>
                            </li>
                        </ul>
                        <h4>1. WHAT INFORMATION DO WE COLLECT?</h4>

                        <p>
                            <strong>
                                Personal information you disclose to us
                            </strong>
                        </p>

                        <p>
                            <strong>In Short:</strong> We collect personal
                            information that you provide to us.
                        </p>

                        <p>
                            We collect personal information that you voluntarily
                            provide to us when you register on the
                            Services,express an interest in obtaining
                            information about us or our products and Services,
                            when you participate in activities on the Services,
                            or otherwise when you contact us.
                        </p>

                        <p>
                            <strong>
                                Personal Information Provided by You.
                            </strong>{" "}
                            The personal information that we collect depends on
                            the context of your interactions with us and the
                            Services, the choices you make, and the products and
                            features you use. The personal information we
                            collect may include the following:
                        </p>
                        <ol>
                            <li>Names</li>
                            <li>Email Addresses</li>
                            <li>Usernames</li>
                            <li>Passwords</li>
                            <li>Wallet Addresses</li>
                        </ol>

                        <p>
                            <strong>Sensitive Information.</strong>We do not
                            process sensitive information.
                        </p>

                        <p>
                            <strong>Social Media Login Data.</strong>We may
                            provide you with the option to register with us
                            using your existing social media account details,
                            like your Facebook, Twitter, or other social media
                            account. If you choose to register in this way, we
                            will collect the information described in the
                            section called "
                            <a href="#">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a>
                            " below.
                        </p>

                        <p>
                            All personal information that you provide to us must
                            be true, complete, and accurate, and you must notify
                            us of any changes to such personal information.
                        </p>

                        <p>
                            <strong>Information automatically collected</strong>{" "}
                        </p>

                        <p>
                            <strong>In Short:</strong> Some information — such
                            as your Internet Protocol (IP) address and/or
                            browser and device characteristics — is collected
                            automatically when you visit our Services.
                        </p>

                        <p>
                            We automatically collect certain information when
                            you visit, use, or navigate the Services. This
                            information does not reveal your specific identity
                            (like your name or contact information) but may
                            include device and usage information, such as your
                            IP address, browser and device characteristics,
                            operating system, language preferences, referring
                            URLs, device name, country, location, information
                            about how and when you use our Services, and other
                            technical information. This information is primarily
                            needed to maintain the security and operation of our
                            Services, and for our internal analytics and
                            reporting purposes.
                        </p>

                        <p>
                            Like many businesses, we also collect information
                            through cookies and similar technologies.
                        </p>

                        <p>The information we collect includes:</p>
                        <ol>
                            <li>
                                Log and Usage Data. Log and usage data is
                                service-related, diagnostic, usage, and
                                performance information our servers
                                automatically collect when you access or use our
                                Services and which we record in log files.
                                Depending on how you interact with us, this log
                                data may include your IP address, device
                                information, browser type, and settings and
                                information about your activity in the
                                Services(such as the date/time stamps associated
                                with your usage, pages and files viewed,
                                searches, and other actions you take such as
                                which features you use), device event
                                information (such as system activity, error
                                reports (sometimes called "crash dumps" ), and
                                hardware settings).
                            </li>
                        </ol>

                        <h4>2. HOW DO WE PROCESS YOUR INFORMATION?</h4>

                        <p>
                            <strong>In Short:</strong>We process your
                            information to provide, improve, and administer our
                            Services, communicate with you, for security and
                            fraud prevention, and to comply with law. We may
                            also process your information for other purposes
                            with your consent.
                        </p>

                        <p>
                            We process your personal information for a variety
                            of reasons, depending on how you interact with our
                            Services, including:
                        </p>

                        <ol>
                            <li>
                                <strong>
                                    To facilitate account creation and
                                    authentication and otherwise manage user
                                    accounts.
                                </strong>{" "}
                                We may process your information so you can
                                create and log in to your account, as well as
                                keep your account in working order.
                            </li>
                            <li>
                                To save or protect an individual's vital
                                interest. We may process your information when
                                necessary to save or protect an individual’s
                                vital interest, such as to prevent harm.
                            </li>
                        </ol>

                        <h4>
                            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
                            INFORMATION?
                        </h4>

                        <p>
                            <strong>In Short:</strong>We only process your
                            personal information when we believe it is necessary
                            and we have a valid legal reason (i.e.,legal basis)
                            to do so under applicable law, like with your
                            consent, to comply with laws, to provide you with
                            services to enter into orfulfillour contractual
                            obligations, to protect your rights, or tofulfillour
                            legitimate business interests.
                        </p>

                        <p>
                            <strong>
                                <i>
                                    If you are located in the EU or UK, this
                                    section applies to you.
                                </i>
                            </strong>
                        </p>

                        <p>
                            The General Data Protection Regulation (GDPR) and UK
                            GDPR require us to explain the valid legal bases we
                            rely on in order to process your personal
                            information. As such, we may rely on the following
                            legal bases to process your personal information:
                        </p>

                        <ol>
                            <li>
                                <strong>Consent.</strong> We may process your
                                information if you have given us permission
                                (i.e.,consent) to use your personal information
                                for a specific purpose. You can withdraw your
                                consent at any time. Click here to learn more.
                            </li>
                            <li>
                                <p>
                                    <strong>Legal Obligations.</strong> We may
                                    process your information where we believe it
                                    is necessary for compliance with our legal
                                    obligations, such as to cooperate with a law
                                    enforcement body or regulatory agency,
                                    exercise or defend our legal rights, or
                                    disclose your information as evidence in
                                    litigation in which we are involved.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Vital Interests.</strong> We may
                                    process your information where we believe it
                                    is necessary to protect your vital interests
                                    or the vital interests of a third party,
                                    such as situations involving potential
                                    threats to the safety of any person.
                                </p>
                            </li>
                        </ol>

                        <p>
                            <strong>
                                <i>
                                    If you are located in Canada, this section
                                    applies to you.
                                </i>
                            </strong>
                        </p>

                        <p>
                            We may process your information if you have given us
                            specific permission (i.e.,express consent) to use
                            your personal information for a specific purpose, or
                            in situations where your permission can be inferred
                            (i.e.,implied consent). You can withdraw your
                            consent at any time. Click here to learn more.
                        </p>

                        <p>
                            In some exceptional cases, we may be legally
                            permitted under applicable law to process your
                            information without your consent, including, for
                            example:
                        </p>

                        <ol>
                            <li>
                                If collection is clearly in the interests of an
                                individual and consent cannot be obtained in a
                                timely way
                            </li>

                            <li>
                                For investigations and fraud detection and
                                prevention
                            </li>

                            <li>
                                For business transactions provided certain
                                conditions are met
                            </li>

                            <li>
                                If it is contained in a witness statement and
                                the collection is necessary to assess, process,
                                or settle an insurance claim
                            </li>

                            <li>
                                For identifying injured, ill, or deceased
                                persons and communicating with next of kin
                            </li>

                            <li>
                                If we have reasonable grounds to believe an
                                individual has been, is, or may be victim of
                                financial abuse
                            </li>

                            <li>
                                If it is reasonable to expect collection and use
                                with consent would compromise the availability
                                or the accuracy of the information and the
                                collection is reasonable for purposes related to
                                investigating a breach of an agreement or a
                                contravention of the laws of Canada or a
                                province
                            </li>

                            <li>
                                If disclosure is required to comply with a
                                subpoena, warrant, court order, or rules of the
                                court relating to the production of records
                            </li>

                            <li>
                                If it was produced by an individual in the
                                course of their employment, business, or
                                profession and the collection is consistent with
                                the purposes for which the information was
                                produced
                            </li>

                            <li>
                                If the collection is solely for journalistic,
                                artistic, or literary purposes
                            </li>

                            <li>
                                If the information is publicly available and is
                                specified by the regulations
                            </li>
                        </ol>

                        <h4>
                            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                            INFORMATION?
                        </h4>

                        <p>
                            <strong>In Short:</strong> We may share information
                            in specific situations described in this section
                            and/or with the followingthird parties.
                        </p>

                        <p>
                            Wemay need to share your personal information in the
                            following situations:
                        </p>

                        <ol>
                            <li>
                                <strong>Business Transfers.</strong> We may
                                share or transfer your information in connection
                                with, or during negotiations of, any merger,
                                sale of company assets, financing, or
                                acquisition of all or a portion of our business
                                to another company.
                            </li>
                        </ol>

                        <h4>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h4>

                        <p>
                            <strong>In Short:</strong> We are not responsible
                            for the safety of any information that you share
                            with third parties that we may link to or who
                            advertise on our Services, but are not affiliated
                            with, our Services.
                        </p>

                        <p>
                            The Servicesmay link to third-party websites, online
                            services, or mobile applications and/or contain
                            advertisements from third parties that are not
                            affiliated with us and which may link to other
                            websites, services, or applications. Accordingly, we
                            do not make any guarantee regarding any such third
                            parties, and we will not be liable for any loss or
                            damage caused by the use of such third-party
                            websites, services, or applications. The inclusion
                            of a link towards a third-party website, service, or
                            application does not imply an endorsement by us. We
                            cannot guarantee the safety and privacy of data you
                            provide to any third parties. Any data collected by
                            third parties is not covered by this privacy notice.
                            We are not responsible for the content or privacy
                            and security practices and policies of any third
                            parties, including other websites, services, or
                            applications that may be linked to or from the
                            Services. You should review the policies of such
                            third parties and contact them directly to respond
                            to your questions.
                        </p>

                        <h4>
                            6. DO WE USE COOKIES AND OTHER TRACKING
                            TECHNOLOGIES?
                        </h4>

                        <p>
                            <strong>In Short:</strong> We may use cookies and
                            other tracking technologies to collect and store
                            your information.
                        </p>

                        <p>
                            We may use cookies and similar tracking technologies
                            (like web beacons and pixels) to access or store
                            information. Specific information about how we use
                            such technologies and how you can refuse certain
                            cookies is set out in our Cookie Notice.
                        </p>

                        <h4>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h4>

                        <p>
                            <strong>In Short:</strong> If you choose to register
                            or log in to our services using a social media
                            account, we may have access to certain information
                            about you.
                        </p>

                        <p>
                            Our Services offer you the ability to register and
                            log in using your third-party social media account
                            details (like your Facebook or Twitter logins).
                            Where you choose to do this, we will receive certain
                            profile information about you from your social media
                            provider. The profile information we receive may
                            vary depending on the social media provider
                            concerned, but will often include your name, email
                            address, friends list, and profile picture, as well
                            as other information you choose to make public on
                            such a social media platform.
                        </p>

                        <p>
                            We will use the information we receive only for the
                            purposes that are described in this privacy notice
                            or that are otherwise made clear to you on the
                            relevant Services. Please note that we do not
                            control, and are not responsible for, other uses of
                            your personal information by your third-party social
                            media provider. We recommend that you review their
                            privacy notice to understand how they collect, use,
                            and share your personal information, and how you can
                            set your privacy preferences on their sites and
                            apps.
                        </p>

                        <h4>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h4>

                        <p>
                            <strong>In Short:</strong> We keep your information
                            for as long as necessary tofulfillthe purposes
                            outlined in this privacy notice unless otherwise
                            required by law.
                        </p>

                        <p>
                            We will only keep your personal information for as
                            long as it is necessary for the purposes set out in
                            this privacy notice, unless a longer retention
                            period is required or permitted by law (such as tax,
                            accounting, or other legal requirements). No purpose
                            in this notice will require us keeping your personal
                            information for longer than the period of time in
                            which users have an account with us.
                        </p>

                        <p>
                            When we have no ongoing legitimate business need to
                            process your personal information, we will either
                            delete oranonymizesuch information, or, if this is
                            not possible (for example, because your personal
                            information has been stored in backup archives),
                            then we will securely store your personal
                            information and isolate it from any further
                            processing until deletion is possible.
                        </p>

                        <h4>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h4>

                        <p>
                            <strong>
                                In Short:We aim to protect your personal
                                information through a system oforganizationaland
                                technical security measures.
                            </strong>
                        </p>

                        <p>
                            We have implemented appropriate and reasonable
                            technical andorganizationalsecurity measures
                            designed to protect the security of any personal
                            information we process. However, despite our
                            safeguards and efforts to secure your information,
                            no electronic transmission over the Internet or
                            information storage technology can be guaranteed to
                            be 100% secure, so we cannot promise or guarantee
                            that hackers, cybercriminals, or
                            otherunauthorizedthird parties will not be able to
                            defeat our security and improperly collect, access,
                            steal, or modify your information. Although we will
                            do our best to protect your personal information,
                            transmission of personal information to and from our
                            Services is at your own risk. You should only access
                            the Services within a secure environment.
                        </p>

                        <h4>10. DO WE COLLECT INFORMATION FROM MINORS?</h4>

                        <p>
                            <strong>In Short:</strong> We do not knowingly
                            collect data from or market to children under 18
                            years of age.
                        </p>

                        <p>
                            We do not knowingly solicit data from or market to
                            children under 18 years of age. By using the
                            Services, you represent that you are at least 18 or
                            that you are the parent or guardian of such a minor
                            and consent to such minor dependent’s use of the
                            Services. If we learn that personal information from
                            users less than 18 years of age has been collected,
                            we will deactivate the account and take reasonable
                            measures to promptly delete such data from our
                            records. If you become aware of any data we may have
                            collected from children under age 18, please contact
                            us at admin@docushield.app.
                        </p>

                        <h4>11. WHAT ARE YOUR PRIVACY RIGHTS?</h4>

                        <p>
                            <strong>In Short: </strong>In some regions, such as
                            the European Economic Area (EEA), United Kingdom
                            (UK), and Canada , you have rights that allow you
                            greater access to and control over your personal
                            information. You may review, change, or terminate
                            your account at any time.
                        </p>

                        <p>
                            In some regions (likethe EEA, UK, and Canada), you
                            have certain rights under applicable data protection
                            laws. These may include the right (i) to request
                            access and obtain a copy of your personal
                            information, (ii) to request rectification or
                            erasure; (iii) to restrict the processing of your
                            personal information; and (iv) if applicable, to
                            data portability. In certain circumstances, you may
                            also have the right to object to the processing of
                            your personal information. You can make such a
                            request by contacting us by using the contact
                            details provided in the section" HOW CAN YOU CONTACT
                            US ABOUT THIS NOTICE? "below.
                        </p>

                        <p>
                            We will consider and act upon any request in
                            accordance with applicable data protection laws. If
                            you are located in the EEA or UK and you believe we
                            are unlawfully processing your personal information,
                            you also have the right to complain to your local
                            data protection supervisory authority. You can find
                            their contact details here:
                            <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                                {" "}
                                https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                .
                            </a>
                        </p>

                        <p>
                            If you are located in Switzerland, the contact
                            details for the data protection authorities are
                            available here:
                            https://www.edoeb.admin.ch/edoeb/en/home.html .
                        </p>

                        <p>
                            Withdrawing your consent: If we are relying on your
                            consent to process your personal information,which
                            may be express and/or implied consent depending on
                            the applicable law,you have the right to withdraw
                            your consent at any time. You can withdraw your
                            consent at any time by contacting us by using the
                            contact details provided in the section" HOW CAN YOU
                            CONTACT US ABOUT THIS NOTICE? "below.
                        </p>

                        <p>
                            However, please note that this will not affect the
                            lawfulness of the processing before its withdrawal
                            nor,when applicable law allows,will it affect the
                            processing of your personal information conducted in
                            reliance on lawful processing grounds other than
                            consent.
                        </p>

                        <p>
                            Opting out of marketing and promotional
                            communications:You can unsubscribe from our
                            marketing and promotional communications at any time
                            byclicking on the unsubscribe link in the emails
                            that we send,or by contacting us using the details
                            provided in the section" HOW CAN YOU CONTACT US
                            ABOUT THIS NOTICE? "below. You will then be removed
                            from the marketing lists. However, we may still
                            communicate with you — for example, to send you
                            service-related messages that are necessary for the
                            administration and use of your account, to respond
                            to service requests, or for other non-marketing
                            purposes.
                        </p>

                        <p>
                            <strong>Account Information</strong>
                        </p>

                        <p>
                            If you would at any time like to review or change
                            the information in your account or terminate your
                            account, you can:
                        </p>

                        <ol>
                            <li>
                                Contact us using the contact information
                                provided.
                            </li>

                            <li>
                                Log in to your account settings and update your
                                user account.
                            </li>
                        </ol>

                        <p>
                            Upon your request to terminate your account, we will
                            deactivate or delete your account and information
                            from our active databases. However, we may retain
                            some information in our files to prevent fraud,
                            troubleshoot problems, assist with any
                            investigations, enforce our legal terms and/or
                            comply with applicable legal requirements.
                        </p>

                        <p>
                            <strong>Cookies and similar technologies:</strong>{" "}
                            Most Web browsers are set to accept cookies by
                            default. If you prefer, you can usually choose to
                            set your browser to remove cookies and to reject
                            cookies. If you choose to remove cookies or reject
                            cookies, this could affect certain features or
                            services of our Services. To opt out of
                            interest-based advertising by advertisers on our
                            Services visit{" "}
                            <a href="http://www.aboutads.info/choices/">
                                {" "}
                                http://www.aboutads.info/choices/
                            </a>
                            .
                        </p>

                        <p>
                            If you have questions or comments about your privacy
                            rights, you may email us atadmin@docushield.app.
                        </p>

                        <h4>12. CONTROLS FOR DO-NOT-TRACK FEATURES</h4>

                        <p>
                            Most web browsers and some mobile operating systems
                            and mobile applications include a Do-Not-Track
                            ("DNT") feature or setting you can activate to
                            signal your privacy preference not to have data
                            about your online browsing activities monitored and
                            collected. At this stage no uniform technology
                            standard forrecognizingand implementing DNT signals
                            has beenfinalized. As such, we do not currently
                            respond to DNT browser signals or any other
                            mechanism that automatically communicates your
                            choice not to be tracked online. If a standard for
                            online tracking is adopted that we must follow in
                            the future, we will inform you about that practice
                            in a revised version of this privacy notice.
                        </p>

                        <h4>
                            13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY
                            RIGHTS?
                        </h4>

                        <p>
                            <strong>In Short:</strong> Yes, if you are a
                            resident of California, you are granted specific
                            rights regarding access to your personal
                            information.
                        </p>

                        <p>
                            California Civil Code Section 1798.83, also known as
                            the"Shine The Light"law, permits our users who are
                            California residents to request and obtain from us,
                            once a year and free of charge, information about
                            categories of personal information (if any) we
                            disclosed to third parties for direct marketing
                            purposes and the names and addresses of all third
                            parties with which we shared personal information in
                            the immediately preceding calendar year. If you are
                            a California resident and would like to make such a
                            request, please submit your request in writing to us
                            using the contact information provided below.
                        </p>

                        <p>
                            If you are under 18 years of age, reside in
                            California, and have a registered account with
                            Services, you have the right to request removal of
                            unwanted data that you publicly post on the
                            Services. To request removal of such data, please
                            contact us using the contact information provided
                            below and include the email address associated with
                            your account and a statement that you reside in
                            California. We will make sure the data is not
                            publicly displayed on the Services, but please be
                            aware that the data may not be completely or
                            comprehensively removed from all our systems
                            (e.g.,backups, etc.).
                        </p>

                        <p>
                            <strong>CCPA Privacy Notice</strong>
                        </p>

                        <p>
                            The California Code of Regulations defines
                            a"resident"as:
                        </p>

                        <ol>
                            <li>
                                (1) Every individual who is in the State of
                                California for other than a temporary or
                                transitory purpose and
                            </li>
                            <li>
                                (2) Every individual who is domiciled in the
                                State of California who is outside the State of
                                California for a temporary or transitory purpose
                            </li>
                        </ol>

                        <p>
                            All other individuals are defined as"non-residents."
                        </p>

                        <p>
                            If this definition of"resident"applies to you, we
                            must adhere to certain rights and obligations
                            regarding your personal information.
                        </p>

                        <p>
                            <strong>
                                What categories of personal information do we
                                collect?
                            </strong>
                        </p>

                        <p>
                            We have collected the following categories of
                            personal information in the past twelve (12) months:
                        </p>

                        <table>
                            <tr>
                                <th>Category</th>
                                <th>Examples</th>
                                <th>Collected</th>
                            </tr>
                            <tr>
                                <td>A. Identifiers</td>
                                <td>
                                    Contact details, such as real name, alias,
                                    postal address, telephone or mobile contact
                                    number, unique personal identifier, online
                                    identifier, Internet Protocol address, email
                                    address, and account name
                                </td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                    B. Personal information categories listed in
                                    the California Customer Records statute
                                </td>
                                <td>
                                    Name, contact information, education,
                                    employment, employment history, and
                                    financial information
                                </td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                    C. Protected classification characteristics
                                    under California or federal law
                                </td>
                                <td>Gender and date of birth</td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>D. Commercial information</td>
                                <td>
                                    Transaction information, purchase history,
                                    financial details, and payment information
                                </td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>E. Biometric information</td>
                                <td>Fingerprints and voiceprints</td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                    F. Internet or other similar network
                                    activity
                                </td>
                                <td>
                                    Browsing history, search history,
                                    onlinebehavior, interest data, and
                                    interactions with our and other websites,
                                    applications, systems, and advertisements
                                </td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>G. Geolocation data</td>
                                <td>Device location</td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                    H. Audio, electronic, visual, thermal,
                                    olfactory, or similar information
                                </td>
                                <td>
                                    Images and audio, video or call recordings
                                    created in connection with our business
                                    activities
                                </td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                    I. Professional or employment-related
                                    information
                                </td>
                                <td>
                                    Business contact details in order to provide
                                    you our Services at a business level or job
                                    title, work history, and professional
                                    qualifications if you apply for a job with
                                    us
                                </td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>J. Education Information</td>
                                <td>
                                    Student records and directory information
                                </td>
                                <td>NO</td>
                            </tr>
                            <tr>
                                <td>
                                    K. Inferences drawn from other personal
                                    information
                                </td>
                                <td>
                                    Inferences drawn from any of the collected
                                    personal information listed above to create
                                    a profile or summary about, for example, an
                                    individual’s preferences and characteristics
                                </td>
                                <td>NO</td>
                            </tr>
                        </table>

                        <p>
                            We may also collect other personal information
                            outside of these categories through instances where
                            you interact with us in person, online, or by phone
                            or mail in the context of:
                        </p>

                        <ol>
                            <li>
                                Receiving help through our customer support
                                channels;
                            </li>
                            <li>
                                Participation in customer surveys or contests;
                                and
                            </li>
                            <li>
                                Facilitation in the delivery of our Services and
                                to respond to your inquiries.
                            </li>
                        </ol>

                        <p>
                            <strong>
                                How do we use and share your personal
                                information?
                            </strong>
                        </p>

                        <p>
                            More information about our data collection and
                            sharing practices can be found in this privacy
                            notice.
                        </p>

                        <p>
                            You may contact us by email atadmin@docushield.app,
                            or by referring to the contact details at the bottom
                            of this document.
                        </p>

                        <p>
                            If you are using anauthorizedagent to exercise your
                            right to opt out we may deny a request if
                            theauthorizedagent does not submit proof that they
                            have been validlyauthorizedto act on your behalf.
                        </p>

                        <p>
                            <strong>
                                Will your information be shared with anyone
                                else?
                            </strong>
                        </p>

                        <p>
                            We may disclose your personal information with our
                            service providers pursuant to a written contract
                            between us and each service provider. Each service
                            provider is a for-profit entity that processes the
                            information on our behalf.
                        </p>

                        <p>
                            We may use your personal information for our own
                            business purposes, such as for undertaking internal
                            research for technological development and
                            demonstration. This is not considered to
                            be"selling"of your personal information.
                        </p>

                        <p>
                            Docushield has not disclosed or sold any personal
                            information to third parties for a business or
                            commercial purpose in the preceding twelve (12)
                            months. Docushield will not sell personal
                            information in the future belonging to website
                            visitors, users, and other consumers.
                        </p>

                        <p>
                            <strong>
                                Your rights with respect to your personal data
                            </strong>
                        </p>

                        <p>
                            Right to request deletion of the data — Request to
                            delete
                        </p>

                        <p>
                            You can ask for the deletion of your personal
                            information. If you ask us to delete your personal
                            information, we will respect your request and delete
                            your personal information, subject to certain
                            exceptions provided by law, such as (but not limited
                            to) the exercise by another consumer of his or her
                            right to free speech, our compliance requirements
                            resulting from a legal obligation, or any processing
                            that may be required to protect against illegal
                            activities.
                        </p>

                        <p>Right to be informed — Request to know</p>

                        <p>
                            Depending on the circumstances, you have a right to
                            know:
                        </p>

                        <ol>
                            <li>
                                Whether we collect and use your personal
                                information;
                            </li>
                            <li>
                                The categories of personal information that we
                                collect;
                            </li>
                            <li>
                                The purposes for which the collected personal
                                information is used;
                            </li>
                            <li>
                                Whether we sell your personal information to
                                third parties;
                            </li>
                            <li>
                                The categories of personal information that we
                                sold or disclosed for a business purpose;
                            </li>
                            <li>
                                The categories of third parties to whom the
                                personal information was sold or disclosed for a
                                business purpose; and
                            </li>
                            <li>
                                The business or commercial purpose for
                                collecting or selling personal information.
                            </li>
                        </ol>

                        <p>
                            In accordance with applicable law, we are not
                            obligated to provide or delete consumer information
                            that is de-identified in response to a consumer
                            request or to re-identify individual data to verify
                            a consumer request.
                        </p>

                        <p>
                            Right to Non-Discrimination for the Exercise of a
                            Consumer’s Privacy Rights
                        </p>

                        <p>
                            We will not discriminate against you if you exercise
                            your privacy rights.
                        </p>

                        <p>
                            <strong>Verification process</strong>
                        </p>

                        <p>
                            Upon receiving your request, we will need to verify
                            your identity to determine you are the same person
                            about whom we have the information in our system.
                            These verification efforts require us to ask you to
                            provide information so that we can match it with
                            information you have previously provided us. For
                            instance, depending on the type of request you
                            submit, we may ask you to provide certain
                            information so that we can match the information you
                            provide with the information we already have on
                            file, or we may contact you through a communication
                            method (e.g.,phone or email) that you have
                            previously provided to us. We may also use other
                            verification methods as the circumstances dictate.
                        </p>

                        <p>
                            We will only use personal information provided in
                            your request to verify your identity or authority to
                            make the request. To the extent possible, we will
                            avoid requesting additional information from you for
                            the purposes of verification. However, if we cannot
                            verify your identity from the information already
                            maintained by us, we may request that you provide
                            additional information for the purposes of verifying
                            your identity and for security or fraud-prevention
                            purposes. We will delete such additionally provided
                            information as soon as we finish verifying you.
                        </p>

                        <p>Other privacy rights</p>

                        <ol>
                            <li>
                                You may object to the processing of your
                                personal information.
                            </li>
                            <li>
                                You may request correction of your personal data
                                if it is incorrect or no longer relevant, or ask
                                to restrict the processing of the information.
                            </li>
                            <li>
                                You can designate anauthorizedagent to make a
                                request under the CCPA on your behalf. We may
                                deny a request from anauthorizedagent that does
                                not submit proof that they have been
                                validlyauthorizedto act on your behalf in
                                accordance with the CCPA.
                            </li>
                            <li>
                                You may request to opt out from future selling
                                of your personal information to third parties.
                                Upon receiving an opt-out request, we will act
                                upon the request as soon as feasibly possible,
                                but no later than fifteen (15) days from the
                                date of the request submission.
                            </li>
                        </ol>

                        <p>
                            To exercise these rights, you can contact us by
                            email atadmin@docushield.app, or by referring to the
                            contact details at the bottom of this document. If
                            you have a complaint about how we handle your data,
                            we would like to hear from you.
                        </p>

                        <h4>14. DO WE MAKE UPDATES TO THIS NOTICE?</h4>

                        <p>
                            <strong>In Short:</strong> Yes, we will update this
                            notice as necessary to stay compliant with relevant
                            laws.
                        </p>

                        <p>
                            We may update this privacy notice from time to time.
                            The updated version will be indicated by an updated
                            "Revised" date and the updated version will be
                            effective as soon as it is accessible. If we make
                            material changes to this privacy notice, we may
                            notify you either by prominently posting a notice of
                            such changes or by directly sending you a
                            notification. We encourage you to review this
                            privacy notice frequently to be informed of how we
                            are protecting your information.
                        </p>

                        <h4>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h4>

                        <p>
                            If you have questions or comments about this notice,
                            you may email us at admin@docushield.app or by post
                            to:
                        </p>

                        <p>
                            Docushield
                            <br />
                            2112 N Main st
                            <br />
                            220
                            <br />
                            Santa Ana , CA 92706
                            <br />
                            United States
                        </p>

                        <h4>
                            16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA
                            WE COLLECT FROM YOU?
                        </h4>

                        <p>
                            Based on the applicable laws of your country, you
                            may have the right to request access to the personal
                            information we collect from you, change that
                            information, or delete it. To request to review,
                            update, or delete your personal information, please
                            submit a request form by clicking here .
                        </p>

                        <p>
                            This privacy policy was created using Termly's
                            Privacy Policy Generator.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="row mt--50">
                <div className="offset-lg-2 col-lg-8">
                    <Button path="#" size="medium" className="mr--15 ml--25">
                        Accept
                    </Button>
                    <Button path="#" color="primary-alta" size="medium">
                        Decline
                    </Button>
                </div>
            </div> */}
        </div>
    </div>
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
