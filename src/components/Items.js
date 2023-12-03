import React from 'react'
const callouts = [
    {
        name: 'Google Pixel 4a',
        description: 'Work from home accessories',
        imageSrc: 'https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
        status: 'Found'
    },
    {
        name: 'Airpod 2nd Gen',
        description: 'Journals and note-taking',
        imageSrc: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
        status: 'Lost'
    },
    {
        name: 'Aadhar Card',
        description: 'Daily commute essentials',
        imageSrc: 'https://miro.medium.com/v2/resize:fit:2000/1*HqyovEj3_aRF0Sp3VBuBIw.jpeg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        status: 'Lost'
    },
    {
        name: 'Blue Pencil box',
        description: 'Work from home accessories',
        imageSrc: 'https://images.meesho.com/images/products/138033586/bvqje_512.webp',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
        status: 'Found'
    },
    
    {
        name: 'Black sunglass',
        description: 'Daily commute essentials',
        imageSrc: 'https://rukminim2.flixcart.com/image/850/1000/l1zc6fk0/sunglass/d/e/z/medium-range-sunglasses-gainx-original-imagdezytckqth5z.jpeg?q=20',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
        status: 'Lost'
    },
    {
        name: 'Earphones',
        description: 'Journals and note-taking',
        imageSrc: 'https://www.zdnet.com/a/img/resize/5b74816409be05bc5d919cc8222c876b1db3ac7c/2022/09/22/92cbda52-2e51-4e62-99b2-eca84b7e6d92/airpods-pro-2022.jpg?auto=webp&fit=crop&height=1200&width=1200',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
        status: 'Lost'
    },
]

const Items = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Our Listings</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative bg-gray-100 shadow-md m-1 mb-10 lg:mb-10 rounded p-2">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg lg:pt-2 lg:mb-10 mb-10 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full rounded-md w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <div className='flex flex-row justify-between'>
                                    <h3 className="mt-3 font-bold text-md text-gray-700">{callout.name}</h3>
                                    <div className={` ${callout.status === 'Found' ? `bg-green-600` : `bg-red-600`} px-3 py-2 rounded mt-1  text-white`}>{callout.status}</div>
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items