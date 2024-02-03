---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Returnează o listă care conține primele rânduri de numere specificate și rândurile rămase.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Returnează o listă care conține două tabele: un tabel cu primele N rânduri de <code>table</code> (după cum este specificat de <code>count</code>) și un tabel care conține rândurile rămase de <code>table</code>.Dacă tabelele din lista rezultată sunt enumerate exact o singură dată și în ordine, funcția va enumera <code>table</code> o singură dată.


## Examples

### Example #1 
Returnați primele două rânduri ale tabelului și rândurile rămase.
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
