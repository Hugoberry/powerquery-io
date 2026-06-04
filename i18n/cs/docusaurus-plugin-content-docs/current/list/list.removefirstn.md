---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Vrátí seznam s vynechaným určitým počtem prvků na začátku seznamu.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vrátí seznam, ze kterého je odebrán první prvek seznamu `list`. Pokud je `list` prázdný seznam, vrátí se prázdný seznam. Tato funkce přebírá volitelný parametr `countOrCondition`, aby podporovala odebrání více hodnot, jak je uvedeno níže.

-   Pokud je zadáno číslo, dojde k odebráni až toho počtu položek.
-   Pokud je zadaná podmínka, odeberou se všechny po sobě jdoucí odpovídající položky na začátku `list`.
-   Pokud je tento parametr null, je zjištěno výchozí chování.


## Examples

### Example #1
Vytvoří ze seznamu \{1, 2, 3, 4, 5\} seznam bez prvních tří čísel.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Vytvoří ze seznamu \{5, 4, 2, 6, 1\} seznam, který začíná číslem menším než 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
