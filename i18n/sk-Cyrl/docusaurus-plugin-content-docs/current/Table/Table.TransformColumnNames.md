---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transformuje názvy stĺpcov použitím zadanej funkcie.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transformuje názvy stĺpcov použitím zadanej funkcie <code>nameGenerator</code>. Platné možnosti:    <div>\     <code>MaxLength</code> určuje maximálnu dĺžku nových názvov stĺpcov. Ak bude výsledkom zadanej funkcie dlhší názov stĺpca, dlhý názov sa oreže.    </div>    <div>      <code>Comparer</code> sa používa na ovládanie porovnania pri generovaní nových názvov stĺpcov. Porovnávače je možné používať na porovnávania, pri ktorých sa rozlišujú malé a veľké písmená alebo jazyková verzia a miestne nastavenia.    </div>    <div>      V jazyku vzorca sú k dispozícii nasledujúce vstavané porovnávače:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: používa sa na vykonanie presného ordinálneho porovnania,</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: používa sa na vykonanie presného ordinálneho porovnania s rozlišovaním veľkých a malých písmen,</li>      <li> <code>Comparer.FromCulture</code>: používa sa na vykonanie porovnania, pri ktorom sa zohľadňuje jazyková verzia.</li>    </ul>    


## Examples

### Example #1 
Odstráňte z názvov stĺpcov znak &lt;code&gt;#(tab)&lt;/code&gt;
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
