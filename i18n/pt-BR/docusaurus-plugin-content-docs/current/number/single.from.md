---
title: Single.From
---

# Single.From


Cria um Único para o valor determinado.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna um valor `number` Único com base no `value` especificado. Se o `value` especificado for `null`, `Single.From` retornará `null`. Se o `value` especificado for um `number` dentro do intervalo de Único, `value` será retornado. Caso contrário, um erro será retornado. Se o `value` for de qualquer outro tipo, será convertido primeiro para um `number` usando `Number.FromText`. Um `culture` opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1
Obtenha o valor `number` Único de `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
