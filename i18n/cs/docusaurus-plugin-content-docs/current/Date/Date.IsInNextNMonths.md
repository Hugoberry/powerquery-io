---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


## Description

Označuje, jestli toto datum spadá do určitého počtu následujících měsíců vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu následujících měsíců vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, která má být vyhodnocena</li>      <li><code>months</code>: Počet měsíců</li>      </ul>


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
