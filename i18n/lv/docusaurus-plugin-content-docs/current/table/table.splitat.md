---
title: Table.SplitAt
---

# Table.SplitAt


Atgriež sarakstu, kurā ir pirmās norādītās skaitīšanas rindas un atlikušās rindas.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Atgriež sarakstu, kurā ir divas tabulas: tabulu ar pirmajām `table` N rindām (kā norādīja `count`) un tabulu, kurā ir pārējās rindas `table`. Ja iegūtā saraksta tabulas tiek uzskaitītas tieši vienu reizi un secībā, funkcija uzskaitīs `table` tikai vienu reizi.


## Examples

### Example #1
Atgrieziet pirmās divas tabulas rindas un pārējās tabulas rindas.
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
