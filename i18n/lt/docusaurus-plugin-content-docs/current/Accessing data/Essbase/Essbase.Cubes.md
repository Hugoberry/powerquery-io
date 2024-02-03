---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

„Essbase“ egzemplioriuje pateikiami pagal „Essbase“ serverį sugrupuoti kubai.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Pateikiama pagal „Essbase“ serverį sugrupuotų kubų lentelė iš „Essbase“ egzemplioriaus APS serveryje <code>url</code>. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code> ir valdyti šias parinktis:    <ul><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li></ul>



## Category
Accessing data
