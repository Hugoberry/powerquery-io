---
title: Geometry.ToWellKnownText
---

# Geometry.ToWellKnownText


Egy strukturált geometriai pont értékét fordítja le Well-Known Text (WKT) formába.


## Syntax

```powerquery
Geometry.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Remarks

Egy strukturált geometriai pont értékét fordítja le Well-Known Text (WKT) formába a Nyílt térinformatikai konzorcium (OGC) meghatározásai szerint. Ezt a szerializálási formátumot sok adatbázis használja, köztük az SQL Server is.



## Category
Record.Serialization
