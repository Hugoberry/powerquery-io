---
title: Decimal.From
---

# Decimal.From


Cria um Decimal para o valor especificado.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna um valor `number` de Decimal com base no `value` especificado. Se o `value` especificado for `null`, `Decimal.From` retornará `null`. Se o `value` especificado for um `number` dentro do intervalo de Decimal, `value` será retornado. Caso contrário, um erro será retornado. Se o `value` for de qualquer outro tipo, será convertido primeiro para um `number` usando `Number.FromText`. Um `culture` opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1
Obtenha o valor `number` Decimal de `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
