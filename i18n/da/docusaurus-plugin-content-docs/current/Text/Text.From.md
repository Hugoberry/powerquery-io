---
title: Text.From
---

# Text.From


## Description

Opretter en tekstværdi ud fra den angivne værdi.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Returnerer tekstrepræsentationen for <code>value</code>. <code>value</code> kan være en værdi af typen <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> eller <code>binary</code>.    Hvis den angivne værdi er null, returnerer <code>Text.From</code> null. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Opret en tekstværdi ud fra tallet 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
