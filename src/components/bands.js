import React from "react"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"


const Bands = (props) => {
    return (
        <div>
            <Link className={blogStyles.listBands} to="../blog/SaraNoxx">Sara Noxx</Link>
            <p><Link to="../blog/Alphaville" className={blogStyles.listBands} >Alphaville</Link></p>
            <p><Link to="../blog/KirlianCamera" className={blogStyles.listBands} >Kirlian Kamera</Link></p>
            <p><Link to="../blog/VNVNation" className={blogStyles.listBands} >VNV Nation</Link></p>
            <p><Link to="../blog/IronMaiden" className={blogStyles.listBands} >Iron Maiden</Link></p>
            <p><Link to="../blog/DeadCanDance" className={blogStyles.listBands} >Dead Can Dance</Link></p>
            <p><Link to="../blog/CultureKultur" className={blogStyles.listBands} >Culture Kultür</Link></p>
            <p><Link to="../blog/Diorama" className={blogStyles.listBands} >Diorama</Link></p>
            <p><Link to="../blog/Psyche" className={blogStyles.listBands} >Psyche</Link></p>
            <p><Link to="../blog/ShadowDance" className={blogStyles.listBands} >The Shadow Dance</Link></p>
            <p><Link to="../blog/Covenant" className={blogStyles.listBands} >Covenant</Link></p>
            <p><Link to="../blog/L'AmeImmortelle" className={blogStyles.listBands} >L'Ame Immortelle</Link></p>
            <p><Link to="../blog/SistersOfMercy" className={blogStyles.listBands} >The Sisters of Mercy</Link></p>
            <p><Link to="../blog/Blutengel" className={blogStyles.listBands} >Blutengel</Link></p>
            <br></br>
        </div>
    )
}



export default Bands