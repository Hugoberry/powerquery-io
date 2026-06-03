---
title: Double.From
---

# Double.From


Cria um Dobro do valor determinado.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna um valor `number` Dobro com base no `value` especificado. Se o `value` especificado for `null`, `Double.From` retornará `null`. Se o `value` especificado for um `number` dentro do intervalo de Dobro, `value` será retornado. Caso contrário, um erro será retornado. Se o `value` for de qualquer outro tipo, será convertido primeiro para um `number` usando `Number.FromText`. Um `culture` opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1
Obtenha o valor de `number` de Dobro de `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
