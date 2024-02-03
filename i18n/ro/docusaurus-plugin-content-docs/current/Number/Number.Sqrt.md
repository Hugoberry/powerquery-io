---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Returnează rădăcina pătrată a numărului.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Returnează rădăcina pătrată a <code>number</code>.    Dacă <code>number</code> este nul, <code>Number.Sqrt</code> returnează nul. Dacă este o valoare negativă, se returnează <code>Number.NaN</code> (nu este număr).


## Examples

### Example #1 
Găsiţi rădăcina pătrată pentru 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Găsiţi rădăcina pătrată pentru 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
