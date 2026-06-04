---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Označuje, jestli toto datum spadá do určitého počtu následujících roků vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního roku.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do určitého počtu následujících roků vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního roku.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, která má být vyhodnocena
-   `years`: Počet roků


## Examples

### Example #1
Určí, zda rok následující po aktuálním systémovém čase spadá do následujících dvou roků.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
