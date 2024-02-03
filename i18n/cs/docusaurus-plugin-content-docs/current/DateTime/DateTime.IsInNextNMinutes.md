---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


## Description

Označuje, jestli tato hodnota datetime spadá do určitého počtu následujících minut vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu následujících minut vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      <li><code>minutes</code>: Počet minut.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli minuta následující po minutě určené aktuálním systémovým časem spadá do příštích dvou minut.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
