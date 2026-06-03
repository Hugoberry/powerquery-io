---
title: List.InsertRange
---

# List.InsertRange


Wstawia wartości na listę pod danym indeksem.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Zwraca nową listę utworzoną przez wstawienie wartości z listy `values` na listę `list` pod indeksem `index`. Pierwsza pozycja na liście ma indeks 0.

-   `list`: Lista docelowa, na którą będą wstawiane wartości.
-   `index`: Indeks listy docelowej (`list`) określający, gdzie mają być wstawione wartości. Pierwsza pozycja na liście ma indeks 0.
-   `values`: Lista wartości, które mają zostać wstawione na listę `list`.


## Examples

### Example #1
Wstaw listę (\{3, 4\}) na listę docelową (\{1, 2, 5\}) pod indeksem 2.
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
Wstaw listę z zagnieżdżoną listą (\{1, \{1.1, 1.2\}\}) na listę docelową (\{2, 3, 4\}) pod indeksem 0.
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
