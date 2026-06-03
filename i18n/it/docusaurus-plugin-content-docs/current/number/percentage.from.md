---
title: Percentage.From
---

# Percentage.From


Restituisce un valore percentuale dal valore specificato.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Restituisce un valore `percentuale` dal dato `value`. Se il dato `value` è `null`, `Percentage.From` restituisce `null`. Se il dato `value` è `testo` con un simbolo percentuale finale, viene restituito il numero decimale convertito. In caso contrario, il valore viene convertito in un `numero` usando `Number.From`. È anche possibile specificare un valore `culture` opzionale (ad esempio "en-US").


## Examples

### Example #1
Ottenere il valore `percentage` di `"12,3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
