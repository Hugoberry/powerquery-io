---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


## Description

Označuje, jestli toto datum spadá do určitého počtu následujících čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu následujících čtvrtletí vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuálního čtvrtletí.      <ul>      <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, která má být vyhodnocena</li>      <li><code>quarters</code>: Počet čtvrtletí</li>      </ul>


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
