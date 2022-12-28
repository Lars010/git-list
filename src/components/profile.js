import styled from 'styled-components'
// import props from './profile-data'
import Button from './button'
import Icon from './icon'

const ProfileStyled = styled.div`
grid-area: profile;
.avatar {
    border-radius: 50%;
    border: 1px solid var(--grey);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
}
.name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: .5rem;
}
.username {
    margin-block-start: .5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
}

.info {
    /* border: 1px solid red; */
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
}
a:hover {
    text-decoration: underline;
}
.buttons {
    display: flex;
    gap: .5rem;
    margin-block-end: 1.5rem;
}

@media screen and (min-width: 768px) {
    .avatar {
        border-radius: 50%;
    border: 1px solid var(--grey);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
    }
}
@media screen and (max-width: 414px) {
  display: grid;
  grid-template-areas: "user-responsive" "bio" "followers" "location" "blog" "contact" "action";

  margin-inline-start: 1.25rem;

  .avatar {
    width: 80px;
    height: 80px;
    margin-inline-end: 1rem;
    
  }
  .user-responsive {
    display: flex;
    grid-area: user-responsive;
  }
  .user-id {
    display: block;
  }
  .bio {
    grid-area: bio;
  }
  .followers {
    grid-area: followers;
  }
  .location {
    grid-area: location;
  }
  .blog {
    grid-area: blog;
  }
  .contact {
    grid-area: contact;
  }
  .buttons {
    grid-area: action;
  }
  
}

`

function Profile(props) {
    const { twitter_username, blog, name, login, avatar_url, bio, followers, following, location } = props

    return (
        <ProfileStyled>
            <div className='user-responsive'>
            <img src={avatar_url} className='avatar' width='278' height='278' alt='' />
            <div className='user-id'>
            <p className='name'>{name}</p>
            <p className='username'>{login}</p>
            </div>
            </div>
            <div className='buttons'>
                <Button
                    text="Follow"
                    link="#"
                />
                <Button
                    text="Sponsor"
                    icon={<Icon
                        name="heart"
                        size={24}
                        color="var(--pink)"
                    />}
                />
            </div>
            <p className='bio info'>
                {bio}
            </p>
            <p className='followers info'>
                <Icon name='user' /> {followers} <span>followers</span><span>*</span><span>{following}</span><span>following</span>
            </p>
            {/* <p className='stars info'>
                * 81
            </p> */}
            <p className='location info'>
                <Icon name='location' /> {location}
            </p>
            <a className='info blog' href={blog} target='_blank' rel='noreferrer'>
                <Icon name='link' /> {blog}
            </a>
            <a className='info contact' href={`https://twitter.com/${twitter_username}`} target='_blank' rel='noreferrer'>
                <Icon name='twitter' /> {twitter_username}
            </a>

        </ProfileStyled>
    )
}

export default Profile
