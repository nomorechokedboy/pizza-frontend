import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../components/HomePage';
import Test from '../components/shard/Test';
import { selectCount, setCount } from '../redux/count/action';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return <HomePage />;
};

export default Home;
