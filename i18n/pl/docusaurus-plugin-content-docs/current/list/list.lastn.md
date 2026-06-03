---
title: List.LastN
---

# List.LastN


Zwraca listę ostatniego elementu lub elementów na określonej liście. Opcjonalnie można określić liczbę zwracanych wartości lub warunek kwalifikujący.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Zwraca listę ostatniego elementu lub elementów na określonej liście.

-   `list`: lista do zbadania. Jeśli lista jest pusta, zwracana jest pusta lista.
-   `countOrCondition`: (opcjonalnie) obsługuje zbieranie wielu elementów lub filtrowanie elementów. Mimo że ten parametr jest wymieniony na liście opcjonalnie, błąd występuje, jeśli ta wartość nie jest podana lub jest wartością `null`. Ten parametr można określić na dwa sposoby:
    -   Jeśli określono liczbę, zwracanych jest maksymalnie tyle elementów.
    -   Jeśli warunek zostanie określony, zostaną zwrócone wszystkie elementy spełniające warunek, począwszy od końca listy. Gdy element ulegnie awarii, nie zostaną uwzględnione żadne dalsze elementy.


## Examples

### Example #1
Znajdź ostatnią wartość na liście \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Znajdź ostatnie wartości na liście \{3, 4, 5, -1, 7, 8, 2\}, które są większe od 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
