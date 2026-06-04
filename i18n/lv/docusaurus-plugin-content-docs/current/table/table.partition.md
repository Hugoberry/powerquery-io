---
title: Table.Partition
---

# Table.Partition


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


## Remarks

`table` tiek sadalīta `groups` saraksta tabulās, pamatojoties uz `column` vērtību un `hash` funkciju. `hash` funkcija tiek lietota `column` rindas vērtībai, lai rindai iegūtu jaucējvērtību. Jaucējvērtības modulis `groups` nosaka, kurās atgrieztajās tabulās rinda tiks ievietota.

-   `table`: sadalāmā tabula.
-   `column`: jaucamā kolonna, lai noteiktu, kurā atgrieztajā tabulā ir rinda.
-   `groups`: norāda, cik tabulās tiks sadalīta ievades tabula.
-   `hash`: funkcija, kas tiek lietota, lai iegūtu jaucējvērtību.


## Examples

### Example #1
Tabulu `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` sadaliet 2 tabulās kolonnā \[a\], izmantojot kolonnu vērtību kā jaucējfunkciju.
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
