import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style = {{height : '100vh'}}>
      <PrettyChatWindow 
        projectId="296d62d0-c777-48b4-aeb8-508eebcc34e4"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}}
      />
    </div>
  )
}

export default ChatsPage;

