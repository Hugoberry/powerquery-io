---
title: Single.From
---

# Single.From


Cria um número Único a partir do valor fornecido.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve um Singular `number` do fornecido `value`. Se o `value` fornecido for `null`, `Single.From` devolve `null`. Se o fornecido `value` for `number` dentro do intervalo Singular `value` é devolvido, caso contrário é devolvido um erro. Se `value` for de qualquer outro tipo, primeiro será convertido num `number` utilizando `Number.FromText`. Um opcional `culture` também poderá ser devolvido (por exemplo, "en-US").


## Examples

### Example #1
Obter o valor `number` Único de `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
