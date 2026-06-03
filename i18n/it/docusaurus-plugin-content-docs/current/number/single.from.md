---
title: Single.From
---

# Single.From


Crea un valore Single dal valore specificato.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Restituisce un valore Single `numero` dal dato `value`. Se il dato`value` è `null`, `Single.From` restituisce `null`. Se il dato `value` si trova nell’intervallo di Single `numero`, `value` viene restituito, in caso contrario, viene restituito un errore. Se `value` è di qualsiasi altro tipo, verrà prima convertito in un `numero` usando `Number.FromText`. È anche possibile specificare `culture` facoltativo (ad esempio "en-US").


## Examples

### Example #1
Ottenere il valore `number` Single di `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
