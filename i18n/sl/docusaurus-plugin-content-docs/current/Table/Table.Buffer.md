---
title: Table.Buffer
---

# Table.Buffer


## Description

Shrani tabelo v medpomnilnik, da med vrednotenjem ne pride do zunanjih sprememb.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

Shrani tabelo v medpomnilnik in jo med vrednotenjem osami pred zunanjimi spremembami.    Medpomnjenje je plitko. Vsili ovrednotenje vseh skalarnih vrednosti celic, vendar pusti neskalarne vrednosti (zapise, sezname, tabele itn.), kot so.    <br />    <br />    Upoštevajte, da lahko s to funkcijo omogočite hitrejše izvajanje poizvedb. V nekaterih primerih lahko poizvedbe zaradi dodatnih stroškov branja vseh podatkov     shranjevanja v pomnilniku ter dejstva, da medpomnjenje preprečuje pregibanje navzdol, upočasnijo izvajanje poizvedb. Če ni treba, da so podatki shranjeni v medpomnilniku,    vendar želite preprečiti pregibanje navzdol, namesto tega uporabite <code>Table.StopFolding</code>.


## Examples

### Example #1 
Naložite vse vrstice tabele SQL v pomnilnik, tako da nobeni postopki v strežniku SQL ne bodo več mogli poizvedovanje po strežniku SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
