---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Taikoma (-os) \{ column, type } formos tipo transformacija (-os) naudojant konkrečią kultūrą.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

Pateikiama lentelė iš įvesties <code>table</code> pritaikant transformavimo operaciją stulpeliams, nurodytiems parametre <code>typeTransformations</code> (kur formatas yra \{ column name, type name}), naudojant nurodytą kultūrą pasirinktiniame parametre <code>culture</code> (pavyzdžiui, „en-US“).    Jei stulpelio nėra, pateikiama išimtis.


## Examples

### Example #1 
Transformuokite [a] stulpelio reikšmių skaičių į tekstines reikšmes iš lentelės &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
