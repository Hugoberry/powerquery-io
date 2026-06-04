---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Označuje, jestli toto datum spadá do předchozího čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do předchozího čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone` k vyhodnocení.


## Examples

### Example #1
Určí, zda čtvrtletí předcházející měsíci určenému aktuálním systémovým časem odpovídá předchozímu čtvrtletí.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
