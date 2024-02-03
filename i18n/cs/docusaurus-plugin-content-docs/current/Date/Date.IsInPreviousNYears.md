---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Označuje, jestli toto datum spadá do určitého počtu předchozích roků vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního roku.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu předchozích roků vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního roku.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, která má být vyhodnocena</li>      <li><code>years</code>: Počet roků</li>      </ul>


## Examples

### Example #1 
Určí, zda rok předcházející aktuálnímu systémovému času spadá do předchozích dvou roků.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
