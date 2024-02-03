---
title: Text.From
---

# Text.From


## Description

Ustvari besedilno vrednost iz dane vrednosti.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Vrne predstavitev <code>value</code> v obliki besedila. <code>value</code> je lahko vrednost <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> ali <code>binary</code>.    Če je dana vrednost ničelna, <code>Text.From</code> vrne "null". Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Ustvarite besedilno vrednost iz števila 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
