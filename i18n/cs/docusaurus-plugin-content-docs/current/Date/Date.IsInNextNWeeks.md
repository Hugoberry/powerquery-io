---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Označuje, jestli toto datum spadá do určitého počtu následujících týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu následujících týdnů vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního týdne.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, která má být vyhodnocena</li>      <li><code>weeks</code>: Počet týdnů</li>      </ul>


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
