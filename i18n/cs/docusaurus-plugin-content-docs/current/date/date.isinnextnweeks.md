---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


Označuje, jestli toto datum spadá do určitého počtu následujících týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do určitého počtu následujících týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, která má být vyhodnocena
-   `weeks`: Počet týdnů


## Examples

### Example #1
Určí, zda týden následující po aktuálním systémovém čase spadá do následujících dvou týdnů.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
