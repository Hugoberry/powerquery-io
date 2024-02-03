---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

Kombinuje zadané stĺpce tabuľky <code>table</code> do nového stĺpca s hodnotou záznamu s názvom <code>newColumnName</code>, v ktorom každý záznam obsahuje názvy a hodnoty polí zodpovedajúce názvom a hodnotám zlúčených stĺpcov. Ak je pre <code>options</code> zadaný záznam, môžete zadať nasledujúce možnosti:     <ul>     <li> <code>DisplayNameColumn</code>: Keď je zadaný ako text, znamená to, že názov daného stĺpca sa má považovať za zobrazovaný názov záznamu. Nemusí to byť jeden zo stĺpcov v samotnom zázname. </li>     <li> <code>TypeName</code>: Keď je zadaný ako text, zastupuje pre výsledný záznam názov logického typu, ktorý sa môže použiť počas načítavania údajov na riadenie správania načítavajúcim prostredím. </li>    </ul>    



## Category
Table.Transformation
