---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Označuje, jestli toto datum spadá do příštího měsíce vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do příštího měsíce vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda měsíc následující po měsíci určeném aktuálním systémovým časem odpovídá následujícímu měsíci.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
