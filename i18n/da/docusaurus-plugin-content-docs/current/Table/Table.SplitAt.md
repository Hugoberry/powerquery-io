---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Returnerer en liste, der indeholder de første antal angivne rækker og de resterende rækker.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Returnerer en liste, der indeholder to tabeller: en tabel med de første N rækker af <code>table</code> (som angivet af <code>count</code>) og en tabel, der indeholder de resterende rækker af <code>table</code>.Hvis tabellerne på den viste liste optælles nøjagtigt én gang og i rækkefølge, optæller funktionen <code>table</code> én gang.


## Examples

### Example #1 
Returner de første to rækker i tabellen og de resterende rækker i tabellen.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
