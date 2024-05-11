import Container from '../components/Container'
import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container>



<Link to={"/dog"}>
        <Card title="Dog" description="Suggest me a Dog" imageUrl="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" />
        </Link>


        <Link to={"/book"}>
 <Card title="Book" description="Suggest me a Book" imageUrl="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg"/>
 </Link>




<Link to={"/meal"}>
 <Card title="Meal" description="Suggest me a Meal" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR887fD9w1WBwwbKzC-rOPe7Dy7_LmHeQAyIA&usqp=CAU"/>
 </Link>


        


 

 


 


    </Container>
  )
}

export default Home