---
title: List.LastN
---

# List.LastN


Vrátí seznam poslední položky nebo položek v zadaném seznamu. Volitelně lze určit, kolik hodnot se má vrátit, nebo kvalifikující podmínku.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Vrátí seznam poslední položky nebo položek v zadaném seznamu.

-   `list`: Seznam, který se má prozkoumat. Pokud je seznam prázdný, vrátí se prázdný seznam.
-   `countOrCondition`: (Volitelné) Podporuje shromažďování více položek nebo filtrování položek. I když je tento parametr uvedený jako volitelný, dojde k chybě, pokud tato hodnota není zadaná nebo je `null`. Tento parametr lze zadat dvěma způsoby:
    -   Pokud je zadáno číslo, vrátí se až tolik položek.
    -   Pokud je zadaná podmínka, vrátí se všechny položky, které splňují podmínku, počínaje na konci seznamu. Jakmile položka podmínce selže, nezohlední se žádné další položky.


## Examples

### Example #1
Vyhledá poslední hodnotu v seznamu \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Vyhledá v seznamu \{3, 4, 5, -1, 7, 8, 2\} poslední hodnoty, které jsou větší než 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
