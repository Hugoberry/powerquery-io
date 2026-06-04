---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


Označuje, jestli toto datum spadá do určitého počtu následujících čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do určitého počtu následujících čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, která má být vyhodnocena
-   `quarters`: Počet čtvrtletí


## Examples

### Example #1
Určí, zda čtvrtletí následující po aktuálním systémovém čase spadá do následujících dvou čtvrtletí.
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
