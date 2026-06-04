---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Skombinuje zadané stĺpce do nového stĺpca obsahujúceho záznamy a hodnoty, v ktorom každý záznam obsahuje názvy polí a hodnoty zodpovedajúce názvom stĺpcov a hodnotám stĺpcov, ktoré boli skombinované.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Kombinuje zadané stĺpce tabuľky `table` do nového stĺpca s hodnotou záznamu s názvom `newColumnName`, v ktorom každý záznam obsahuje názvy a hodnoty polí zodpovedajúce názvom a hodnotám zlúčených stĺpcov. Ak je pre `options` zadaný záznam, môžete zadať nasledujúce možnosti:

-   `DisplayNameColumn`: Keď je zadaný ako text, znamená to, že názov daného stĺpca sa má považovať za zobrazovaný názov záznamu. Nemusí to byť jeden zo stĺpcov v samotnom zázname.
-   `TypeName`: Keď je zadaný ako text, zastupuje pre výsledný záznam názov logického typu, ktorý sa môže použiť počas načítavania údajov na riadenie správania načítavajúcim prostredím.



## Category
Table.Transformation
