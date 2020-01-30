import React from "react"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"


const Bands = (props) => {
    return (
        <div className={blogStyles.gridContainer} > 
            <p className={blogStyles.gridItem} ><Link  to="../blog/10SaraNoxx" className={blogStyles.listBands} >Sara Noxx</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/20Alphaville" className={blogStyles.listBands} >Alphaville</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/30KirlianCamera" className={blogStyles.listBands} >Kirlian Kamera</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/40VNVNation" className={blogStyles.listBands} >VNV Nation</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/50IronMaiden" className={blogStyles.listBands} >Iron Maiden</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/60DeadCanDance" className={blogStyles.listBands} >Dead Can Dance</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/70CultureKultur" className={blogStyles.listBands} >Culture Kultür</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/80Diorama" className={blogStyles.listBands} >Diorama</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/90Psyche" className={blogStyles.listBands} >Psyche</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/100GhostDance" className={blogStyles.listBands} >Ghost Dance</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/110Covenant" className={blogStyles.listBands} >Covenant</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/120L'AmeImmortelle" className={blogStyles.listBands} >L'Ame Immortelle</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/130SistersOfMercy" className={blogStyles.listBands} >The Sisters of Mercy</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/140Blutengel" className={blogStyles.listBands} >Blutengel</Link></p>
            <p className={blogStyles.gridItem} ><Link to="../blog/150ProjectPitchfork" className={blogStyles.listBands} >Project Pitchfork</Link></p>
            <br></br>
        </div>
    )
}



export default Bands