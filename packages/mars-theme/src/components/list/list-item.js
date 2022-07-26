import { connect, styled, style } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link className="post-title" link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div className="user-meta">
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
			  By 
            <AuthorName>
              <b> {author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b>
        </PublishDate>
      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt className="post-content" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
	font-size: 22px;
	margin: 0 0 8px 0;
	box-sizing: border-box;
	font-weight: 600;

	:hover {
		opacity: 0.7;
	}
`;

const AuthorName = styled.span`
	color: #222222;
	transition: .3s;
	-webkit-transition: .3s;
	-moz-transition: .3s;
	-o-transition: .3s;
`;

const StyledLink = styled(Link)`
//   padding: 15px 0;
  color: #828282;
  font-size: 14px;
  font-weight: 300;
  :hover {
	  ${AuthorName} {
		  color: #f47e00;
	  }
  }
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 14px;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: #787878;
`;
