---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformuje názvy stĺpcov použitím zadanej funkcie.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transformuje názvy stĺpcov použitím zadanej funkcie `nameGenerator`. Platné možnosti:

\\ `MaxLength` určuje maximálnu dĺžku nových názvov stĺpcov. Ak bude výsledkom zadanej funkcie dlhší názov stĺpca, dlhý názov sa oreže.

`Comparer` sa používa na ovládanie porovnania pri generovaní nových názvov stĺpcov. Porovnávače je možné používať na porovnávania, pri ktorých sa rozlišujú malé a veľké písmená alebo jazyková verzia a miestne nastavenia.

V jazyku vzorca sú k dispozícii nasledujúce vstavané porovnávače:

-   `Comparer.Ordinal`: používa sa na vykonanie presného ordinálneho porovnania,
-   `Comparer.OrdinalIgnoreCase`: používa sa na vykonanie presného ordinálneho porovnania s rozlišovaním veľkých a malých písmen,
-   `Comparer.FromCulture`: používa sa na vykonanie porovnania, pri ktorom sa zohľadňuje jazyková verzia.


## Examples

### Example #1
Odstráňte z názvov stĺpcov znak `#(tab)`
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transformuje názvy stĺpcov, aby sa vygenerovali názvy s dĺžkou 6 znakov, v ktorých sa nerozlišujú malé a veľké písmená.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
