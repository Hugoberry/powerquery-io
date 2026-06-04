---
title: List.InsertRange
---

# List.InsertRange


Vstavi vrednosti v seznam z danim indeksom.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Vrne nov seznam, ustvarjen z vstavljanjem vrednosti na seznamu `values` v seznam `list` z indeksom `index`. Prvi položaj na seznamu ima indeks 0.

-   `list`: ciljni seznam, v katerega bodo vstavljene vrednosti.
-   `index`: indeks ciljnega seznama (`list`), v katerega bodo vstavljene vrednosti. Prvi položaj na seznamu ima indeks 0.
-   `values`: seznam vrednosti, ki bodo vstavljene v seznam `list`.


## Examples

### Example #1
Vstavite seznam (\{3, 4\}) v ciljni seznam (\{1, 2, 5\}) z indeksom 2.
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
Vstavite seznam z ugnezdenim seznamom (\{1, \{1.1, 1.2\}\}) v ciljni seznam (\{2, 3, 4\}) z indeksom 0.
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
