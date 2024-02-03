---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Retorna l&#39;arrel quadrada del nombre .


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Retorna l'arrel quadrada de <code>number</code>.    Si <code>number</code> és nul <code>Number.Sqrt</code>, retorna el valor nul. Si és un valor negatiu, es retorna <code>Number.NaN</code> (no és un nombre).


## Examples

### Example #1 
Troba l&#39;arrel quadrada de 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Troba l&#39;arrel quadrada de 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
