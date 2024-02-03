---
title: Table.Partition
---

# Table.Partition


## Description

Tabula tiek sadalīta tabulu sarakstā, pamatojoties uz norādīto grupu un kolonnu skaitu.


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

<code>table</code> tiek sadalīta <code>groups</code> saraksta tabulās, pamatojoties uz <code>column</code> vērtību un <code>hash</code> funkciju.    <code>hash</code> funkcija tiek lietota <code>column</code> rindas vērtībai, lai rindai iegūtu jaucējvērtību. Jaucējvērtības modulis <code>groups</code> nosaka, kurās atgrieztajās tabulās rinda tiks ievietota.    <ul>       <li><code>table</code>: sadalāmā tabula.</li>       <li><code>column</code>: jaucamā kolonna, lai noteiktu, kurā atgrieztajā tabulā ir rinda.</li>       <li><code>groups</code>: norāda, cik tabulās tiks sadalīta ievades tabula.</li>       <li><code>hash</code>: funkcija, kas tiek lietota, lai iegūtu jaucējvērtību.</li>    </ul>  


## Examples

### Example #1 
Tabulu &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; sadaliet 2 tabulās kolonnā [a], izmantojot kolonnu vērtību kā jaucējfunkciju.
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
