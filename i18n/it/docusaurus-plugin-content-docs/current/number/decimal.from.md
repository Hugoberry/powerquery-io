---
title: Decimal.From
---

# Decimal.From


Crea un valore Decimal dal valore specificato.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Restituisce un valore Decimale `numero` dal dato `value`. Se il dato`value` è `null`, `Decimale.From` restituisce `null`. Se il dato `value` si trova nell’intervallo di Decimale `numero`, `value` viene restituito, in caso contrario, viene restituito un errore. Se `value` è di qualsiasi altro tipo, verrà prima convertito in un `numero` usando `Number.FromText`. È anche possibile specificare `culture` facoltativo (ad esempio "en-US").


## Examples

### Example #1
Ottenere il valore `number` Decimal di `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
