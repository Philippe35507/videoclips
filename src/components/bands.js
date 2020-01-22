import React from "react"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"


const Bands = (props) => {
    return (
        <div>
            <p><Link to="../blog/10%20SaraNoxx" className={blogStyles.listBands} >Sara Noxx</Link></p>
            <p><Link to="../blog/20%20Alphaville" className={blogStyles.listBands} >Alphaville</Link></p>
            <p><Link to="../blog/30%20KirlianCamera" className={blogStyles.listBands} >Kirlian Kamera</Link></p>
            <p><Link to="../blog/40%20VNVNation" className={blogStyles.listBands} >VNV Nation</Link></p>
            <p><Link to="../blog/50%20IronMaiden" className={blogStyles.listBands} >Iron Maiden</Link></p>
            <p><Link to="../blog/60%20DeadCanDance" className={blogStyles.listBands} >Dead Can Dance</Link></p>
            <p><Link to="../blog/70%20CultureKultur" className={blogStyles.listBands} >Culture Kultür</Link></p>
            <p><Link to="../blog/80%20Diorama" className={blogStyles.listBands} >Diorama</Link></p>
            <p><Link to="../blog/90%20Psyche" className={blogStyles.listBands} >Psyche</Link></p>
            <p><Link to="../blog/100%20ShadowDance" className={blogStyles.listBands} >The Shadow Dance</Link></p>
            <p><Link to="../blog/110%20Covenant" className={blogStyles.listBands} >Covenant</Link></p>
            <p><Link to="../blog/120%20L'AmeImmortelle" className={blogStyles.listBands} >L'Ame Immortelle</Link></p>
            <p><Link to="../blog/130%20SistersOfMercy" className={blogStyles.listBands} >The Sisters of Mercy</Link></p>
            <p><Link to="../blog/140%20Blutengel" className={blogStyles.listBands} >Blutengel</Link></p>
            <br></br>
        </div>
    )
}



export default Bands