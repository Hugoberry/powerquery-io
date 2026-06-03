---
title: List.InsertRange
---

# List.InsertRange


Indsætter værdier på en liste ved det angivne indeks.


## Syntax

```powerquery
List.InsertRange(
    list as list,
    index as number,
    values as list
) as list
```


## Remarks

Returnerer en ny liste, der er oprettet ved at indsætte værdierne fra `values` i `list` ved `index`. Den første position på listen er ved indeks 0.

-   `list`: Den destinationsliste, hvor værdier skal indsættes.
-   `index`: Indeks for destinationslisten (`list`), hvor værdierne skal indsættes. Den første position på listen er ved indeks 0.
-   `values`: Den liste over værdier, som skal indsættes i `list`.


## Examples

### Example #1
Indsæt listen (\{3, 4\}) i destinationslisten (\{1, 2, 5\}) ved indeks 2.
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
Indsæt en liste med en indlejret liste (\{1, \{1.1, 1.2\}\}) i en destinationsliste (\{2, 3, 4\}) ved indeks 0.
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
