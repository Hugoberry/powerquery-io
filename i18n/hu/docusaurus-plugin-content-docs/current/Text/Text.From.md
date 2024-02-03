---
title: Text.From
---

# Text.From


## Description

Létrehoz egy szöveges értéket a megadott értékből.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

A <code>value</code> szöveges ábrázolását adja vissza. A <code>value</code> lehet <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> vagy <code>binary</code> érték.    Ha az adott érték null, a <code>Text.From</code> null értéket ad vissza. Egy nem kötelező <code>culture</code> is megadható (például „en-US”).


## Examples

### Example #1 
Létrehoz egy szöveges értéket a 3 számból.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
