import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
	  <div className="pagination">
      	<Pagination />
	  </div>
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // grid-gap: 25px;

  article {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 30px;
    padding: 30px 30px;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -o-transition: .3s;

    :hover {
      box-shadow: 0 0 30px rgba(0,0,0,0.05);
    }

    .user-meta {
      color: #ddd;
    }

    .post-title {
      display: block;
    }

    .post-content {
      p {
        margin: 18px 0 0 0;
        a {
          color: #f47d00;
        }
      }
    }
  }

  .pagination {
	  margin-top: 50px;
	  > div {
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		  a {
				display: inline-block;
				background: #f0f0f0;
				color: #222;
				font-size: 14px;
				border-radius: 4px;
				padding: 7px 14px;
				transition: .3s;
				-webkit-transition: .3s;
				-moz-transition: .3s;
				-o-transition: .3s;

				em {
					margin: 0;
				}
				:hover {
					background: #dfdfdf;
				}
		  }
	  }
  }
`;

const Header = styled.h3`
	font-weight: 300;
	text-transform: capitalize;
	color: rgba(12, 17, 43, 0.9);

	b {
		color: #000000;
		background: rgb(244 126 0 / 15%);
		display: inline-block;
		border-radius: 2px;
		padding: 2px 4px;
		font-weight: 600;
		font-size: 16px;
	}
`;
