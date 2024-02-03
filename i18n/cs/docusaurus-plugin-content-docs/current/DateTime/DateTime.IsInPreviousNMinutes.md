---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


## Description

Označuje, jestli tato hodnota datetime spadá do určitého počtu předchozích minut vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Details

Označuje, jestli daná hodnota datetime <code>dateTime</code> spadá do určitého počtu předchozích minut vzhledem k aktuálnímu datu a času v systému. Pozor, že tato funkce vrátí „false“, pokud je jí předána hodnota, která nastává v rámci aktuální minuty.      <ul>      <li><code>dateTime</code>: Hodnota <code>datetime</code> nebo <code>datetimezone</code> k vyhodnocení.</li>      <li><code>minutes</code>: Počet minut.</li>      </ul>


## Examples

### Example #1 
Určuje, jestli minuta předcházející minutě určené aktuálním systémovým časem spadá do předchozích dvou minut.
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
