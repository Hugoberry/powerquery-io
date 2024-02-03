---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Pateikiamas sąrašas, kuriame yra pirmosios nurodytos eilutės pagal eilę ir likusios eilutės.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Pateikiamas sąrašas, kuriame yra dvi lentelės: lentelė, kurioje yra <code>table</code> pirmosios N eilutės (kaip nurodo <code>count</code>), ir lentelė su likusiomis <code>table</code> eilutėmis.Jei gauto sąrašo lentelės yra išvardytos tik vieną kartą ir paeiliui, funkcija išvardys <code>table</code> tik vieną kartą.


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
