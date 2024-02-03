---
title: Percentage.From
---

# Percentage.From


## Description

Vraća vrednost procenta iz date vrednosti.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vraća vrednost <code>percentage</code> od datog <code>value</code>. Ako je data vrednost <code>value</code> <code>null</code>, <code>Percentage.From</code> vraća <code>null</code>.  Ako je data vrednost <code>value</code> <code>text</code> sa simbolom procenta na kraju, biće vraćen konvertovani decimalni broj. U suprotnom, vrednost će biti konvertovana u <code>number</code> koristeći <code>Number.From</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Preuzmite vrednost &lt;code&gt;procenat&lt;/code&gt; od &lt;code&gt;„12,3%“&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
