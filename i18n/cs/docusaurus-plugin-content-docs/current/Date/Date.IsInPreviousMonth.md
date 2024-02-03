---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


## Description

Označuje, jestli toto datum spadá do předchozího měsíce vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do předchozího měsíce vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního měsíce.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      </ul>


## Examples

### Example #1 
Určí, zda měsíc předcházející měsíci určenému aktuálním systémovým časem odpovídá předchozímu měsíci.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
