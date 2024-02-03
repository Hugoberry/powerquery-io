---
title: Table.Partition
---

# Table.Partition


## Description

Deli tabelu na listu tabela na osnovu broja grupa i navedene kolone.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

Deli <code>table</code> na listu <code>groups</code> broja tabela na osnovu vrednosti koju ima <code>column</code> i funkcije <code>hash</code>.    Funkcija <code>hash</code> se primenjuje na vrednost reda <code>column</code> da bi se dobila vrednost heša za red. Modulo vrednosti heša <code>groups</code> određuje u koju vraćenu tabelu će red biti smešten.    <ul>       <li><code>table</code>: Tabela koja se deli.</li>       <li><code>column</code>: Kolona na osnovu koje je dobijen heš da bi se odredilo u kojoj vraćenoj tabeli se red nalazi.</li>       <li><code>groups</code>: Broj tabela na koje će ulazna tabela biti podeljena.</li>       <li><code>hash</code>: Funkcija koja se primenjuje da bi se dobila vrednost heša.</li>    </ul>  


## Examples

### Example #1 
Deljenje tabele &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; na 2 tabele u koloni [a] koristeći vrednost kolona kao heš funkciju.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
