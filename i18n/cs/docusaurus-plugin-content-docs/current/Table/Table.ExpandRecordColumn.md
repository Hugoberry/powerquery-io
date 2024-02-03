---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

Rozšíří sloupec záznamů na sloupce pomocí jednotlivých hodnot.


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

Na základě sloupce <code>column</code> záznamů vstupní tabulky <code>table</code> vytvoří tabulku pro každé pole záznamu. Volitelně může být určen seznam <code>newColumnNames</code>, který zajistí jedinečnost názvů sloupců v nové tabulce.    <ul>        <li><code>table</code>: Původní tabulka se sloupcem záznamu, který se má rozšířit </li>        <li><code>column</code>: Sloupec, který se má rozšířit</li>        <li><code>fieldNames</code>: Seznam polí, která se mají rozšířit na sloupce tabulky</li>        <li><code>newColumnNames</code>: Seznam názvů sloupců, které mají být dány novým sloupcům Názvy nových sloupců nemohou duplikovat žádné sloupce v nové tabulce.</li>    </ul>


## Examples

### Example #1 
Rozšíří sloupec [a] tabulky &lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; na tři sloupce aa, bb a cc.
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
