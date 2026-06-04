---
title: Double.From
---

# Double.From


Crea un valor de tipus Double a partir del valor determinat.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna un valor `number` de tipus Double a partir del valor `value` proporcionat. Si el valor `value` proporcionat és `null`, `Double.From` retorna `null`. Si el valor `value` proporcionat és `number` dins de l'interval de tipus Double, es retorna el valor `value`; en cas contrari, es retorna un error. Si el valor `value` és de qualsevol altre tipus, primer es convertirà al valor `number` mitjançant `Number.FromText`. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté el valor `number` de tipus Double de `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
