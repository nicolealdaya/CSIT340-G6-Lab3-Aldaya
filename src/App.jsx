const Header = (props) => {
 return <h1>{props.course}</h1>
}
const App = () => {
 const course = 'CSIT340 - Industry Elective 1'
 return (
<div>
<Header course={course} />
</div>
 )
}
export default App