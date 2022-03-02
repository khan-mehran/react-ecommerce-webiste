import React from 'react'
import Category from '../../components/categories/Category'
import styles from './products.module.css'

const Products = () => {
    return (
        <>
            <section className={styles.category}>
                <div className='container'>
                    <div className='row mt-4'>
                        <h3>All Products</h3>
                        <Category />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
