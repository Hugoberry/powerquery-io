---
title: Table.SplitAt
---

# Table.SplitAt


Vraća listu koja sadrži prve navedene redove i preostale redove.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Vraća listu koja sadrži dve tabele: tabelu sa prvih N redova od`table` (kao što je navedeno u polju `count`) i tabelu koja sadrži preostale redove `table`. Ako se tabele rezultirajuće liste navedu tačno jednom i po redu funkcija će nabrojati `table` samo jednom.


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
