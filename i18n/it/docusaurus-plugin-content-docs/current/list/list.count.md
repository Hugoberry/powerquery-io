---
title: List.Count
---

# List.Count


Restituisce il numero di elementi dell'elenco.


## Syntax

```powerquery
List.Count(
    list as list
) as number
```


## Remarks

Restituisce il numero di elementi dell'elenco specificato.

-   `list`: elenco da esaminare.


## Examples

### Example #1
Trovare il numero di valori dell'elenco \{1, 2, 3\}.
```powerquery
List.Count({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Determina quante volte appare il colore rosso in un elenco di colori, ignorando maiuscole e minuscole.
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
Trova il numero di clienti in un elenco che hanno acquistato per più di 100 $.
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
