---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Označuje, jestli toto datum spadá do určitého počtu následujících měsíců vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do určitého počtu následujících měsíců vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, která má být vyhodnocena
-   `months`: Počet měsíců


## Examples

### Example #1
Určí, zda měsíc následující po aktuálním systémovém čase spadá do následujících dvou měsíců.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
