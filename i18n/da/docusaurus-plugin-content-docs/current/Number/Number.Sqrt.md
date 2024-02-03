---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Returnerer kvadratroden af tallet.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Returnerer kvadratroden af <code>number</code>.     Hvis <code>number</code> er null, returnerer <code>Number.Sqrt</code> null. Hvis det er en negativ værdi, returneres <code>Number.NaN</code> (ikke et tal).


## Examples

### Example #1 
Find kvadratroden af 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Find kvadratroden af 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
