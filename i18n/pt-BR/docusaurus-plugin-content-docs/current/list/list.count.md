---
title: List.Count
---

# List.Count


Retorna o número de itens na lista.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Retorna o número de itens na lista especificada.

-   `list`: a lista a ser examinada.


## Examples

### Example #1
Localize o número de valores na lista \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Localize o número de vezes que o vermelho aparece em uma lista de cores, ignorando maiúsculas e minúsculas.
```powerquery
let
    colors = {"Red", "Blue", "GREEN", "red", "Yellow", "RED"},
    redCount = List.Count(
        List.Select(colors, each Text.Lower(_) = "red")
    )
in
    redCount
```

Result: 
```powerquery
3
```


### Example #3
Localize em uma lista o número de clientes que compraram mais de US$ 100.
```powerquery
let
    customers = {
        [CustomerID = 101, CustomerName = "Alice", AmountPurchased = 150],
        [CustomerID = 102, CustomerName = "Bob", AmountPurchased = 75],
        [CustomerID = 103, CustomerName = "Carol", AmountPurchased = 50],
        [CustomerID = 104, CustomerName = "Dave", AmountPurchased = 90],
        [CustomerID = 105, CustomerName = "Eve", AmountPurchased = 120]
    },
    highValueCustomerCount = List.Count(
        List.Select(customers, each [AmountPurchased] > 100)
    )
in
    highValueCustomerCount
```

Result: 
```powerquery
2
```




## Category
List.Information
