---
title: Double.From
---

# Double.From


Crea un real a partir do valor facilitado.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve un valor `number` Double a partir do `value` indicado. Se o `value` indicado é `null`, `Double.From` devolve `null`. Se o `value` indicado é `number` dentro do intervalo Double, `value` devólvese, se non, devólvese un erro. Se `value` é doutro tipo, primeiro converterase nun `number` usando `Number.FromText`. Tamén se pode fornecer unha `culture`opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obteña o valor `number` real de `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
