---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

Pateikiama lentelė, kurioje yra turinio iš „SharePoint“ svetainės.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Pateikiama lentelė, kurioje yra visų nurodytoje „SharePoint“ svetainėje <code>url</code> rastų aplankų ir dokumentų eilutės. Kiekvienoje eilutėje pateikiamos aplanko arba failo ypatybės ir jų turinio saitas. Galima nurodyti <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>ApiVersion</code> : Skaičius (14 arba 15) arba tekstas Auto, nurodantis „SharePoint“ API versiją, kuri bus naudojama šioje svetainėje. Jei nenurodyta, naudojama 14 API versija. Jei nurodyta Auto, bus automatiškai nustatyta serverio versija (jei įmanoma) arba naudojama numatytoji 14 versija. Norint naudotis „SharePoint“ svetainėmis ne anglų kalba reikia mažiausiai 15 versijos.</li></ul>    



## Category
Accessing data
