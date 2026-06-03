---
title: Double.From
---

# Double.From


Cria um número Duplo a partir do valor fornecido.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve um valor `number` Duplo a partir do `value` fornecido. Se o `value` fornecido for `null`, `Double.From` devolve `null`. Se o `value` fornecido for `number` dentro do intervalo de números Duplos, é devolvido `value`; caso contrário, é devolvido um erro. Se o `value` fornecido for de algum outro tipo, será primeiro convertido para um `number` utilizando `Number.FromText`. Um opcional `culture` também poderá ser fornecido (por exemplo, "en-US").


## Examples

### Example #1
Obter o valor `number` Duplo de `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
