---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Pateikiama lentelė, kurioje yra „SharePoint“ sąrašo turinys.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Pateikiama lentelė, kurioje yra visų nurodytame „SharePoint“ sąraše <code>url</code> rastų sąrašo elementų eilutės. Kiekvienoje eilutėje pateikiamos sąrašo ypatybės. Galima nurodyti <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>ApiVersion</code> : Skaičius (14 arba 15) arba tekstas Auto, nurodantis „SharePoint“ API versiją, kuri bus naudojama šioje svetainėje. Jei nenurodyta, naudojama 14 API versija. Jei nurodyta Auto, bus automatiškai nustatyta serverio versija (jei įmanoma) arba naudojama numatytoji 14 versija. Norint naudotis „SharePoint“ svetainėmis ne anglų kalba reikia mažiausiai 15 versijos.</li><li><code>Implementation</code> : Pasirinktinai. Nurodo, kurią „SharePoint“ jungties versiją naudoti. Priimtinos reikšmės yra „2.0“ arba „null“. Jei reikšmė yra „2.0“, naudojamas „SharePoint“ jungties „2.0“ diegimas. Jei reikšmė „null“, naudojamas pradinis „SharePoint“ jungties diegimas.</li><li><code>ViewMode</code> : Pasirinktinai. Ši parinktis galima tik diegiant „2.0“. Priimtinos reikšmės yra „Viskas“ ir „Numatytoji“. Jei nenurodyta jokia reikšmė, reikšmė nustatoma į „Viskas“. Kai nurodyta „Viskas“, rodinyje yra visi vartotojo sukurti ir sistemos nustatyti stulpeliai. Kai nurodyta „Numatytoji“ reikšmė, rodinys atitiks tai, ką vartotojas mato žiūrėdamas į sąrašą internete, atsižvelgiant į tai, korį rodinį šis vartotojas savo parametruose nustatė kaip „Numatytasis“. Jei vartotojas redaguoja numatytąjį rodinį, kad galėtų įtraukti arba pašalinti vartotojo sukurtus ar sistemos apibrėžtus stulpelius, arba kurdamas naują rodinį ir nustatydamas jį kaip numatytąjį, šie pakeitimai bus išplatinti per jungtį.</li><li><code>DisableAppendNoteColumns</code> : Neleidžia jungčiai naudoti atskiro galinio punkto pastabų stulpeliams.</li></ul>    



## Category
Accessing data
