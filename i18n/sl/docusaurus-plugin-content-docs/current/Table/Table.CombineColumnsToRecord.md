---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Združi navedene stolpce v nov stolpec z vrednostjo zapisa, kjer vsak zapis vsebuje imena polj in vrednosti, ki ustrezajo imenom stolpcev in vrednostim stolpcev, ki so bili združeni.


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

Združi navedene stolpce <code>table</code> v nov stolpec z vrednostjo zapisa, imenovan <code>newColumnName</code>, kjer vsak zapis vsebuje imena polj in vrednosti, ki ustrezajo imenom stolpcev in vrednostim stolpcev, ki so bile združene. Če je za <code>options</code> določen zapis, bodo morda na voljo te možnosti:    <ul>     <li> <code>DisplayNameColumn</code>: če je naveden kot besedilo, označuje, da je treba navedeno ime stolpca obravnavati kot prikazano ime zapisa, vendar ni potrebno, da je to eden od stolpcev v samem zapisu.</li>     <li> <code>TypeName</code>: če je naveden kot besedilo, zagotovi ime logične vrste za ustvarjen zapis, ki ga je mogoče uporabiti med nalaganjem podatkov za omogočanje delovanja glede na okolje nalaganja.</li>    </ul>    



## Category
Table.Transformation
