---
title: Text.From
---

# Text.From


## Description

Kreira tekstualnu vrednost od date vrednosti.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Vraća tekstualnu reprezentaciju za <code>value</code>. <code>value</code> može da bude vrednost <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> ili <code>binary</code>.    Ako je data stavka bez vrednosti, <code>Text.From</code> vraća rezultat bez vrednosti. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Kreiranje tekstualne vrednosti od broja 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
