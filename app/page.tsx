import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ferry Dermawan',
    description: 'I am Ferry, a fullstack web developer and the founder of Kelas Ferry based in Batam City, Indonesia',
};

export default function Page() {
    return (
        <p>
            {`Thank you very much for visiting my website! I am happy to be able to provide information and education to you and I hope the contents of my website will be useful to you. Feel free to contact me if there's anything I can help you with!`}
        </p>
    )
}
