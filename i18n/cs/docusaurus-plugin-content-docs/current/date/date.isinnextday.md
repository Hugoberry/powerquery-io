---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Označuje, jestli toto datum spadá do příštího dne vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního dne.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do příštího dne vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního dne.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda den následující po dni určeném aktuálním systémovým časem odpovídá následujícímu dni.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
