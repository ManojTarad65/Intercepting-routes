import Link from "next/link"


const Ecommerce = () => {
    const products = [
        {
            id:1,
            name:"Macbook pro",
            price:"$1000",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpt7gAUhLdgI9QgYI5UjZliRbKMBHhHuM7A&s"
            
        },
        {
            id:2,
            name:"Macbook air m1",
            price:"$1000",
            image:"https://m.media-amazon.com/images/I/71jG+e7roXL.jpg"
            
        },
        {
            id:3,
            name:"Macbook air m2",
            price:"$1000",
            image:"https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/master/pass/macbookair3.jpg"
            
        },
    ]
    
  return (
    
        <section className="m-[4rem]">
            <div>
                <h1 className="text-3xl mb-3">Ecommerce</h1>
                <p>Shop the latest fashion and technology</p>
            </div>
            <section className="flex gap-3">
                {products.map((product)=>(
                    <div className="w-[200px] border" key={product.id}>
                        <Link href={`/ecommerce/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                        </Link>
                    </div>
                ))}
            </section>

        </section>
  )
   
}

export default Ecommerce