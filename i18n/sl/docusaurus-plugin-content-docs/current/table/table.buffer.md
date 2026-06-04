---
title: Table.Buffer
---

# Table.Buffer


Shrani tabelo v medpomnilnik, da med vrednotenjem ne pride do zunanjih sprememb.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Shrani tabelo v pomnilnik in jo med vrednotenjem osami pred zunanjimi spremembami. Medpomnjenje je plitvo. Vsili ovrednotenje vseh skalarnih vrednosti celic, vendar pusti ne-skalarne vrednosti (zapise, sezname, tabele itn.), kot so.

-   `table`: tabela za shranjevanje v medpomnilnik.
-   `options`: (izbirno) uporabite lahko te možnosti vrednosti zapisa:
    -   `BufferMode`: način shranjevanja v medpomnilnik, ki opisuje vrsto medpomnilnika, ki bo izveden. Ta možnost je lahko `BufferMode.Eager` ali `BufferMode.Delayed`.

Če uporabite to funkcijo, se poizvedbe morda ne bodo izvajale hitreje. V nekaterih primerih se lahko poizvedbe izvajajo počasneje zaradi dodatnih stroškov branja vseh podatkov in shranjevanja v pomnilnik ter dejstva, da shranjevanje v medpomnilnik preprečuje zlaganje iz strežnika. Če podatkov ni treba medpomniti, ampak želite le preprečiti zlaganje iz strežnika, uporabite `Table.StopFolding`.


## Examples

### Example #1
Naložite vse vrstice tabele SQL v pomnilnik, da nobeni postopki iz strežnika ne bodo več mogli poizvedovati po strežniku SQL.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
