import Layout from '../components/layout';

import Link from 'next/link';
export default function About(){
    return(
        <Layout title="About DJ event">
        <h1>About</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
        <p><Link href="/" >Home</Link></p>
        </Layout>
    );
}