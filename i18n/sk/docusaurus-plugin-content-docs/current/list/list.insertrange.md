---
title: List.InsertRange
---

# List.InsertRange


Vloží hodnoty do zoznamu s daným indexom.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Vráti nový zoznam vytvorený vložením hodnôt `values` do zoznamu `list` s indexom `index`. Prvá pozícia v zozname má index 0.

-   `list`: Cieľový zoznam, do ktorého sa majú vložiť hodnoty.
-   `index`: Index cieľového zoznamu (`list`), do ktorého sa majú vložiť hodnoty. Prvá pozícia v zozname má index 0.
-   `values`: Zoznam hodnôt, ktoré sa majú vložiť do zoznamu `list`.


## Examples

### Example #1
Vložte zoznam (\{3, 4\}) do cieľového zoznamu (\{1, 2, 5\}) s indexom 2.
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
Vložte zoznam s vnoreným zoznamom (\{1, \{1.1, 1.2\}\}) do cieľového zoznamu (\{2, 3, 4\}) s indexom 0.
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
