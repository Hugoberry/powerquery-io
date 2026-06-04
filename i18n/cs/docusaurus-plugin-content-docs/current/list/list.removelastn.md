---
title: List.RemoveLastN
---

# List.RemoveLastN


Vrátí seznam, ze kterého je odebrán určitý počet prvků na konci seznamu.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vrátí seznam, který odebere poslední(ch) `countOrCondition` prvky(/ů) na konci seznamu `list`. Pokud `list` obsahuje méně než `countOrCondition` prvky(/ů), vrátí se prázdný seznam.

-   Pokud je zadáno číslo, dojde k odebráni až toho počtu položek.
-   Pokud je zadaná podmínka, odeberou se všechny po sobě jdoucí odpovídající položky na konci `list`.
-   Pokud má tento parametr hodnotu null, odebere se pouze jedna položka.


## Examples

### Example #1
Vytvoří ze seznamu \{1, 2, 3, 4, 5\} seznam bez posledních tří čísel.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Vytvoří ze seznamu \{5, 4, 2, 6, 4\} seznam, který končí číslem menším než 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
