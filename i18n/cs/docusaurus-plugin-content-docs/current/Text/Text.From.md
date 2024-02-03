---
title: Text.From
---

# Text.From


## Description

Vytvoří z dané hodnoty textovou hodnotu.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Vrátí textovou reprezentaci řetězce <code>value</code>. Řetězcem <code>value</code> může být hodnota typu <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> nebo <code>binary</code>.    Pokud je danou hodnotou null, funkce <code>Text.From</code> vrátí hodnotu null. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Vytvoří textovou hodnotu z čísla 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
