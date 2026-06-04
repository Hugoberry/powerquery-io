---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


Označuje, jestli toto datum spadá do příštího čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do příštího čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda čtvrtletí následující po čtvrtletím určeném aktuálním systémovým časem odpovídá následujícímu čtvrtletí.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
