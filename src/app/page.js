// pages/index.js
import React from 'react';
import Layout from '../app/components/defaultlayout';
import MainBanner from './components/banner';
import ReduxProvider from '../app/store/providers'; 

export default function Home() {
  return (
    <ReduxProvider>
      <Layout>
        <div className="text-4xl font-bold text-center mt-10">E-Commerce Store</div>
        <p className="text-xl text-center mt-4">Welcome to our online store!</p>
        <MainBanner/>
        <br/>
      </Layout>
    </ReduxProvider>
  );
}
