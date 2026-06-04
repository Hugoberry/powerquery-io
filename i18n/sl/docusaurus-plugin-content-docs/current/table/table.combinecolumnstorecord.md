---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


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


## Remarks

Združi navedene stolpce `table` v nov stolpec z vrednostjo zapisa, imenovan `newColumnName`, kjer vsak zapis vsebuje imena polj in vrednosti, ki ustrezajo imenom stolpcev in vrednostim stolpcev, ki so bile združene. Če je za `options` določen zapis, bodo morda na voljo te možnosti:

-   `DisplayNameColumn`: če je naveden kot besedilo, označuje, da je treba navedeno ime stolpca obravnavati kot prikazano ime zapisa, vendar ni potrebno, da je to eden od stolpcev v samem zapisu.
-   `TypeName`: če je naveden kot besedilo, zagotovi ime logične vrste za ustvarjen zapis, ki ga je mogoče uporabiti med nalaganjem podatkov za omogočanje delovanja glede na okolje nalaganja.



## Category
Table.Transformation
