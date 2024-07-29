import { Fragment } from 'react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { CgDribbble } from 'react-icons/cg';
import {
  FaBehanceSquare,
  FaBuilding,
  FaDev,
  FaFacebook,
  FaGlobe,
  FaLinkedin,
  FaMastodon,
  FaReddit,
  FaSkype,
  FaStackOverflow,
  FaTelegram,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareThreads, FaGoogleScholar } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { RiMailFill, RiPhoneFill } from 'react-icons/ri';
import { SiResearchgate, SiTwitter, SiUdemy } from 'react-icons/si';
import { Profile } from '../../interfaces/profile';
import {
  SanitizedGithub,
  SanitizedSocial,
} from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { SocialIcon } from 'react-social-icons'

type Props = {
  profile: Profile | null;
  loading: boolean;
  social: SanitizedSocial;
  github: SanitizedGithub;
};

const Scholar = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px"><path fill="#1e88e5" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path fill="#1565c0" d="M35,16.592v-3.878L37,11H27l0.917,1.833c-1.236,0-2.265,0-2.265,0S19.095,13,19.095,18.748	c0,5.752,5.732,5.088,5.732,5.088s0,0.865,0,1.453c0,0.594,0.77,0.391,0.864,1.583c-0.388,0-7.964-0.208-7.964,4.998	s6.679,4.959,6.679,4.959s7.722,0.365,7.722-6.104c0-3.871-4.405-5.121-4.405-6.686c0-1.563,3.319-2.012,3.319-5.684	c0-0.823-0.028-1.524-0.149-2.12L34,13.571v3.02c-0.581,0.207-1,0.756-1,1.408v4.5c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5V18	C36,17.348,35.581,16.799,35,16.592z M30.047,31.169c0.131,2.024-1.929,3.811-4.603,3.998c-2.671,0.188-4.946-1.295-5.077-3.316	c-0.133-2.016,1.927-3.805,4.6-3.996C27.641,27.667,29.914,29.152,30.047,31.169z M26.109,22.453	c-1.592,0.451-3.375-1.062-3.982-3.367c-0.604-2.312,0.195-4.543,1.786-4.992c1.593-0.453,3.374,1.059,3.981,3.367	C28.499,19.77,27.702,22.004,26.109,22.453z" /><path fill="#e8eaf6" d="M34,16.592V12c0-0.051-0.015-0.097-0.029-0.143L35,11H21l-9,8h5.383	c0.174,5.466,5.715,4.836,5.715,4.836s0,0.865,0,1.453c0,0.594,0.771,0.391,0.865,1.583c-0.388,0-7.964-0.208-7.964,4.998	s6.679,4.959,6.679,4.959s7.721,0.365,7.721-6.104c0-3.871-4.404-5.121-4.404-6.686c0-1.563,3.318-2.012,3.318-5.684	c0-0.971-0.047-1.763-0.232-2.422L33,12.667v3.925c-0.581,0.207-1,0.756-1,1.408v4.5c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5	V18C35,17.348,34.581,16.799,34,16.592z M28.319,31.169c0.131,2.024-1.928,3.811-4.602,3.998c-2.671,0.188-4.946-1.295-5.077-3.316	c-0.133-2.016,1.927-3.805,4.599-3.996C25.914,27.667,28.187,29.152,28.319,31.169z M24.38,22.453	c-1.591,0.451-3.373-1.062-3.981-3.367c-0.604-2.312,0.194-4.543,1.785-4.992c1.593-0.453,3.374,1.059,3.982,3.367	C26.77,19.77,25.973,22.004,24.38,22.453z" /></svg>)
}

const Gmail = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="60px" height="60px"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" /><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" /><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" /><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" /><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" /></svg>)
}

const getFormattedMastodonValue = (
  mastodonValue: string,
  isLink: boolean,
): string => {
  const [username, server] = mastodonValue.split('@');

  if (isLink) {
    return `https://${server}/@${username}`;
  } else {
    return `${username}@${server}`;
  }
};

const ListItem: React.FC<{
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  link?: string;
  skeleton?: boolean;
}> = ({ icon, title, value, link, skeleton = false }) => {
  return (
    <div className="flex justify-start py-2 px-1 items-center">
      <div className="flex-grow font-large gap-1 flex items-center my-1">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex justify-start py-2 px-1 items-center"
        >{icon}
        </a>
      </div>

    </div>
  );
};



/**
 * Renders the details card component.
 *
 * @param {Object} profile - The profile object.
 * @param {boolean} loading - Indicates whether the data is loading.
 * @param {Object} social - The social object.
 * @param {Object} github - The GitHub object.
 * @return {JSX.Element} The details card component.
 */
const DetailsCard = ({ profile, loading, social, github }: Props) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 4; index++) {
      array.push(
        <ListItem
          key={index}
          skeleton={true}
          icon={skeleton({ widthCls: 'w-4', heightCls: 'h-4' })}
          title={skeleton({ widthCls: 'w-30', heightCls: 'h-4' })}
          value={skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {loading || !profile ? (
            renderSkeleton()
          ) : (
            <Fragment>
              <div className="text-center font-bold text-2xl">
                Reach Me @
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-6 gap-0 rounded-box">

                <ListItem
                  icon={<SocialIcon size={34} url="https://github.com" />}
                  title=""
                  value=""
                  link={`https://github.com/${github.username}`}
                />
                <ListItem
                  icon={<Scholar />}
                  title=""
                  value=""
                  link={`https://scholar.google.com/citations?user=${social.scholar}&hl=en`}
                />
                {social?.twitter && (
                  <ListItem
                    icon={<SocialIcon size={34} url="https://x.com" />}
                    title=""
                    value=""
                    link={`https://twitter.com/${social.twitter}`}
                  />
                )}
                {social?.linkedin && (
                  <ListItem
                    icon={<SocialIcon size={34} url="https://linkedin.com" />}
                    title=""
                    value=""
                    link={`https://www.linkedin.com/in/${social.linkedin}`}
                  />
                )}
                {social?.instagram && (
                  <ListItem
                    icon={<SocialIcon size={34} url="https://instagram.com" />}
                    title=""
                    value=""
                    link={`https://www.instagram.com/${social.instagram}`}
                  />
                )}
                {social?.website && (
                  <ListItem
                    icon={<FaGlobe size={20} />}
                    title="Website:"
                    value={social.website
                      .replace('https://', '')
                      .replace('http://', '')}
                    link={
                      !social.website.startsWith('http')
                        ? `http://${social.website}`
                        : social.website
                    }
                  />
                )}
                {social?.email && (
                  <ListItem
                    icon={<Gmail />}
                    title=""
                    value=""
                    link={`mailto:${social.email}`}
                  />
                )}
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
