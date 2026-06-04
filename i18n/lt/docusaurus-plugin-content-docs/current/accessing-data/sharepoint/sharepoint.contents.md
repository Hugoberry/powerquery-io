---
title: SharePoint.Contents
---

# SharePoint.Contents


Pateikiama lentelė, kurioje yra turinio iš „SharePoint“ svetainės.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Pateikiama lentelė, kurioje yra visų nurodytoje „SharePoint“ svetainėje `url` rastų aplankų ir dokumentų eilutės. Kiekvienoje eilutėje pateikiamos aplanko arba failo ypatybės ir jų turinio saitas. Galima nurodyti `options`, kad būtų galima valdyti šias parinktis:

-   `ApiVersion` : Skaičius (14 arba 15) arba tekstas Auto, nurodantis „SharePoint“ API versiją, kuri bus naudojama šioje svetainėje. Jei nenurodyta, naudojama 14 API versija. Jei nurodyta Auto, bus automatiškai nustatyta serverio versija (jei įmanoma) arba naudojama numatytoji 14 versija. Norint naudotis „SharePoint“ svetainėmis ne anglų kalba reikia mažiausiai 15 versijos.
-   `Implementation` : Pasirinktinai. Nurodo, kurią „SharePoint“ jungties versiją naudoti. Priimtinos reikšmės yra „2.0“ arba „null“. Jei reikšmė yra „2.0“, naudojamas „SharePoint“ jungties „2.0“ diegimas. Jei reikšmė „null“, naudojamas pradinis „SharePoint“ jungties diegimas.



## Category
Accessing data
