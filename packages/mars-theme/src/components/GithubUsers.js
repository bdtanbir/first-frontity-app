import { Global, css, connect, fetch, styled, Head } from "frontity";


const GithubUsers = ({state, actions}) => {
   const changeHandler = (e) => {
        state.theme.githubUserName = e.target.value;
       console.log(e.target.value);
   }
   

    return (
      <>
      <Container>
        <h1>Github Users</h1>
        <form>
            <div className="input-group">
                <input type="text" onChange={changeHandler} defaultValue={state.theme.githubUserName} />
                <button type="button" onClick={actions.theme.fetchGithubHandler}>Search</button>
            </div>
        </form>


        {
            state.theme.result ? (
                <div className="users">
                    {state.theme.result.map((user, i) => {
                        return (
                            <div className="user-list" key={i}>
                                <img src={user.avatar_url} />
                                
                                <h3>
                                    <a href={user.html_url}>
                                        {user.login}
                                    </a>
                                </h3>
                            </div>
                        )
                    })}
                </div>
            ) : ''
        }
        
      </Container>
      </>
  );

};

export default connect(GithubUsers);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .users {
        display: grid;
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 15px;
        margin-top: 20px;
        max-height: 600px;
        overflow-x: hidden;
        border: 1px solid #aaa;
        border-radius: 4px;
      .user-list {
        padding: 10px;
        background: #fff;
        text-align: center;
        padding: 15px 10px;
        border-radius: 8px;
        img {
            width: 100%;
            max-width: 100px;
            border-radius: 12px;
        }
    }
  }
`;




