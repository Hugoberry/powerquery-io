---
title: Table.SplitAt
---

# Table.SplitAt


Pateikiamas sąrašas, kuriame yra pirmosios nurodytos eilutės pagal eilę ir likusios eilutės.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Pateikiamas sąrašas, kuriame yra dvi lentelės: lentelė, kurioje yra `table` pirmosios N eilutės (kaip nurodo `count`), ir lentelė su likusiomis `table` eilutėmis. Jei gauto sąrašo lentelės yra išvardytos tik vieną kartą ir paeiliui, funkcija išvardys `table` tik vieną kartą.


## Examples

### Example #1
Pateikiamos pirmosios dvi lentelės eilutės ir likusios lentelės eilutės.
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
