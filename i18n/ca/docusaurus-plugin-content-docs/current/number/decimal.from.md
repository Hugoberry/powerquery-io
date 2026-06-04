---
title: Decimal.From
---

# Decimal.From


Crea un valor de tipus Decimal a partir del valor determinat.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna un valor `number` de tipus Decimal a partir del valor `value` proporcionat. Si el valor `value` proporcionat és `null`, `Decimal.From` retorna `null`. Si el valor `value` proporcionat és `number` dins de l'interval de tipus Decimal, es retorna el valor `value`; en cas contrari, es retorna un error. Si el valor `value` és de qualsevol altre tipus, primer es convertirà al valor `number` mitjançant `Number.FromText`. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté un valor `number` de tipus Decimal de `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
