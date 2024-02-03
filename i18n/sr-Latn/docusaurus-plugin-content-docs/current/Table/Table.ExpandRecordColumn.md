---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Proširuje kolonu zapisa u kolone sa svakom vrednošću.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

Ako je dato <code>column</code> zapisa u unosu <code>table</code>, kreira tabelu sa kolonom za svako polje u zapisu. Opcionalno, <code>newColumnNames</code> može da bude navedeno da bi imena kolona u novoj tabeli sigurno bila jedinstvena.    <ul>        <li><code>table</code>: Prvobitna tabela sa kolonom zapisa koja se proširuje. </li>        <li><code>column</code>: Kolona koja se proširuje.</li>        <li><code>fieldNames</code>: Lista polja koja se proširuju u kolone u tabeli.</li>        <li><code>newColumnNames</code>: Lista sa imenima kolona koja treba dati novim kolonama. Imena novih kolona ne mogu da dupliraju nijednu kolonu iz nove tabele.</li>    </ul>


## Examples

### Example #1 
Proširenje kolone [a] u tabeli &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; u 3 kolone: „aa“, „bb“ i „cc“.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
