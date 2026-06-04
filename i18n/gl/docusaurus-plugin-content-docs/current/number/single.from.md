---
title: Single.From
---

# Single.From


Crea un Single a partir do valor facilitado.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve un valor `number` Single a partir do `value` indicado. Se o `value` indicado é `null`, `Single.From` devolve `null`. Se o `value` indicado é `number` dentro do intervalo Single, `value` devólvese, se non, devólvese un erro. Se `value` é doutro tipo, primeiro converterase nun `number` usando `Number.FromText`. Tamén se pode fornecer unha `culture`opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obteña o valor `number` Single de `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
