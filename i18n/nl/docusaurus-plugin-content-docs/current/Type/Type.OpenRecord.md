---
title: Type.OpenRecord
---

# Type.OpenRecord


## Description

Retourneert een geopende versie van het gegeven recordtype (of hetzelfde type indien dit reeds is geopend).


## Syntax

```powerquery
Type.OpenRecord(
    type as type
) as type
```


## Details

Retourneert een geopende versie van het gegeven <code>record</code> <code>type</code> (of hetzelfde type indien dit reeds is geopend).


## Examples

### Example #1 
Maak een geopende versie van &lt;code&gt;type [ A = getal]&lt;/code&gt;.
```powerquery
Type.OpenRecord(type [A = number])
```

Result: 
```powerquery
type [A = number, ...]
```




## Category
Type
