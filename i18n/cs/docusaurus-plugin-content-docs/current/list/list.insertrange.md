---
title: List.InsertRange
---

# List.InsertRange


Vloží hodnoty do seznamu na pozici určenou předaným indexem.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Vrátí nový seznam vytvořený vložením hodnot v seznamu `values` do seznamu `list` na pozici `index`. První pozice v seznamu má index 0.

-   `list`: Cílový seznam, do kterého budou vloženy hodnoty.
-   `index`: Index cílového seznamu (`list`), do kterého budou vloženy hodnoty. První pozice v seznamu má index 0.
-   `values`: Seznam hodnot, které budou vloženy do seznamu `list`.


## Examples

### Example #1
Vloží seznam (\{3, 4\}) do cílového seznamu (\{1, 2, 5\}) na pozici 2.
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
Vloží seznam s vnořeným seznamem (\{1, \{1.1, 1.2\}\}) do cílového seznamu (\{2, 3, 4\}) na pozici 0.
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
