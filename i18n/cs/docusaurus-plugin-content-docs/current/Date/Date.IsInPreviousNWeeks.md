---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


## Description

Označuje, jestli toto datum spadá do určitého počtu předchozích týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu předchozích týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, která má být vyhodnocena</li>      <li><code>weeks</code>: Počet týdnů</li>      </ul>


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
