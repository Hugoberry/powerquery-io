---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Vraća listu koja sadrži prve navedene redove i preostale redove.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Vraća listu koja sadrži dve tabele: tabelu sa prvih N redova od<code>table</code> (kao što je navedeno u polju <code>count</code>) i tabelu koja sadrži preostale redove <code>table</code>.Ako se tabele rezultirajuće liste navedu tačno jednom i po redu funkcija će nabrojati <code>table</code> samo jednom.


## Examples

### Example #1 
Vratite prva dva reda i preostale redove tabele.
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
