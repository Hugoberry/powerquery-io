---
title: List.Random
---

# List.Random


Vrátí seznam náhodných čísel.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Vrátí seznam náhodných čísel od 0 do 1 na základě předaného počtu hodnot, které se mají vygenerovat, a volitelné počáteční hodnoty.

-   `count`: Počet náhodných hodnot, které se mají vygenerovat.
-   `seed`: *(Volitelné)* Číselná hodnota použitá jako počáteční hodnota generátoru náhodných čísel. Pokud se vynechá, vygeneruje se při každém volání funkce jedinečný seznam náhodných čísel. Pokud zadáte počáteční číselnou hodnotu, funkce při každém volání vygeneruje stejný seznam náhodných čísel.


## Examples

### Example #1
Vytvoří seznam 3 náhodných čísel.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2
Vytvoří seznam 3 náhodných čísel za použití počáteční hodnoty.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
