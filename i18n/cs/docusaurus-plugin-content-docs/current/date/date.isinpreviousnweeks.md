---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Označuje, jestli toto datum spadá do určitého počtu předchozích týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Označuje, jestli daná hodnota datetime `dateTime` spadá do určitého počtu předchozích týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, která má být vyhodnocena
-   `weeks`: Počet týdnů


## Examples

### Example #1
Určí, zda týden předcházející aktuálnímu systémovému času spadá do předchozích dvou týdnů.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
