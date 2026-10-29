import { useParams  , useSearchParams , useLocation } from 'react-router'

const CallPage = () => {

     const {path} = useParams();
     const [searchParams] = useSearchParams();
     const pathname = useLocation().pathname;
     const hi = searchParams.get("hi");
     const query = searchParams.get("query");

  return (
    <div>
      <h1>call page</h1>
      <h1>path : {path}</h1>
      <h1>query : {query}</h1>
      <h1>hi : {hi}</h1>
      <h1>pathname : {pathname}</h1>
    </div>
  )
}

export default CallPage
