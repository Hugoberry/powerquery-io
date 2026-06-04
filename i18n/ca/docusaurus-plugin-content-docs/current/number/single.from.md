---
title: Single.From
---

# Single.From


Crea un valor de tipus Single a partir del valor determinat.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna un valor `number` de tipus SIngle a partir del valor `value` proporcionat. Si el valor `value` proporcionat és `null`, `Single.From` retorna `null`. Si el valor `value` proporcionat és `number` dins de l'interval de tipus Single, es retorna el valor `value`; en cas contrari, es retorna un error. Si el valor `value` és de qualsevol altre tipus, primer es convertirà al valor `number` mitjançant `Number.FromText`. També es pot proporcionar un valor `culture` (per exemple, "en-US").


## Examples

### Example #1
Obté el valor `number` de tipus Single de `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
