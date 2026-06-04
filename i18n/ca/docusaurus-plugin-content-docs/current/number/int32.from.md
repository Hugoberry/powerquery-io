---
title: Int32.From
---

# Int32.From


Crea un enter de 32 bits a partir del valor determinat.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retorna un valor `number` enter de 32 bits a partir del valor `value` proporcionat. Si el valor `value` proporcionat és `null`, `Int32.From` retorna `null`. Si el valor `value` proporcionat és `number` dins de l'interval d'enters de 32 bits sense cap part decimal, es retorna el valor `value`. Si té una part decimal, el número s'arrodoneix segons el mode d'arrodoniment especificat. El mode d'arrodoniment per defecte és `RoundingMode.ToEven`. Si el valor `value` és d’un altre tipus, primer es convertirà a un valor `number` mitjançant `Number.FromText`. Consulteu `Number.Round` per obtenir els modes d'arrodoniment disponibles. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté el valor `number` enter de 32 bits de `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obté el valor `number` enter de 32 bits de `"4.5"` amb `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
