import Head from 'next/head';
import Layout from "@/components/layout";

const goals = [
    {
        title: "Debt-Free Living",
        description: "Completely debt-free, except for the home mortgage.",
        completed: true,
    },
    {
        title: "Emergency Fund",
        description: "I need $3,600 to support my wife, child, and myself for six months in case of emergency.",
        completed: false,
    },
    {
        title: "Child's Education Fund",
        description: "I have one child born on August 31, 2024. My goal is to save $2,300 by the year 2030.",
        completed: false,
    },
    {
        title: "Pay Off Home Mortgage",
        description: "I'm currently paying $250/month for my home loan with a 10-year flat interest rate, expected to finish by 2035.",
        completed: false,
    },
    {
        title: "Retirement Fund",
        description: "My target is $200,000 invested with a 7% annual return — 4% for living expenses and 3% to offset inflation.",
        completed: false,
    },
];

export default function Goals() {
    return (
        <Layout>
            <Head>
                <title>Goals | Ferry Dermawan</title>
                <meta
                    name="description"
                    content="A collection of personal financial goals including debt freedom, education funds, and retirement planning."
                />
            </Head>
            <main>
                <section>
                    <h1 className="font-medium">My Financial Goals</h1>
                    <ul className="mt-5 flex flex-col gap-4">
                        {goals.map((goal, index) => (
                            <li key={index} className="flex items-start">
                                <input
                                    type="checkbox"
                                    checked={goal.completed}
                                    className="mt-1.5"
                                    readOnly
                                />
                                <div className="flex flex-col ml-2">
                                    <h2>{goal.title}</h2>
                                    <p className="text-sm text-gray-500">{goal.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    );
}
