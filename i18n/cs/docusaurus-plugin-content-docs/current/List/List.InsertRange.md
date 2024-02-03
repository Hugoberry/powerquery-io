---
title: List.InsertRange
---

# List.InsertRange


## Description

Vloží hodnoty do seznamu na pozici určenou předaným indexem.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Details

Vrátí nový seznam vytvořený vložením hodnot v seznamu <code>values</code> do seznamu <code>list</code> na pozici <code>index</code>. První pozice v seznamu má index 0.      <ul>        <li><code>list</code>: Cílový seznam, do kterého budou vloženy hodnoty.</li>        <li><code>index</code>: Index cílového seznamu (<code>list</code>), do kterého budou vloženy hodnoty. První pozice v seznamu má index 0.</li>        <li><code>values</code>: Seznam hodnot, které budou vloženy do seznamu <code>list</code>.</li>      </ul>


## Examples

### Example #1 
Vloží seznam (\{3, 4}) do cílového seznamu (\{1, 2, 5}) na pozici 2.
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
Vloží seznam s vnořeným seznamem (\{1, \{1.1, 1.2}}) do cílového seznamu (\{2, 3, 4}) na pozici 0.
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
