---
title: Text.From
---

# Text.From


## Description

Vytvorí textovú hodnotu z danej hodnoty.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Vráti textové vyjadrenie hodnoty <code>value</code>. Hodnotou <code>value</code> môže byť <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> alebo <code>binary</code>.    Ak je daná hodnota null, formát <code>Text.From</code> vráti hodnotu null. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Vytvorte textovú hodnotu z čísla 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
