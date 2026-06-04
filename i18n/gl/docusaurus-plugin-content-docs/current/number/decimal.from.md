---
title: Decimal.From
---

# Decimal.From


Crea un decimal a partir do valor fornecido.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve un valor `number` decimal a partir do `value` indicado. Se o `value` indicado é `null`, `Decimal.From` devolve `null`. Se o `value` indicado é `number` dentro do intervalo de Decimal, `value` devólvese, se non, devólvese un erro. Se `value` é doutro tipo, primeiro converterase nun `number` usando `Number.FromText`. Tamén se pode fornecer un `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obteña o valor `number` decimal de `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
