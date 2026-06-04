---
title: List.InsertRange
---

# List.InsertRange


Umeće vrednosti u listu kod datog indeksa.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Vraća novu listu koja se dobija umetanjem vrednosti iz `values` u `list` kod `index`. Prvi položaj na listi je kod indeksa 0.

-   `list`: Ciljna lista u koju se umeću vrednosti.
-   `index`: Indeks ciljne liste (`list`) u koju se umeću vrednosti. Prvi položaj na listi je kod indeksa 0.
-   `values`: Lista vrednosti koje se umeću u `list`.


## Examples

### Example #1
Umeće listu (\{3, 4\}) u ciljnu listu (\{1, 2, 5\}) kod indeksa 2.
```powerquery
List.InsertRange({1, 2, 5}, 2, {3, 4})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5
}
```


### Example #2
Umeće listu sa ugnežđenom listom (\{1, \{1.1, 1.2\}\}) u ciljnu listu (\{2, 3, 4\}) kod indeksa 0.
```powerquery
List.InsertRange({2, 3, 4}, 0, {1, {1.1, 1.2}})
```

Result: 
```powerquery
{
    1,
    {
        1.1,
        1.2
    },
    2,
    3,
    4
}
```




## Category
List.Selection
