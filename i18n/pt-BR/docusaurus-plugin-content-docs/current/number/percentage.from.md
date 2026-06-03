---
title: Percentage.From
---

# Percentage.From


Retorna um valor de porcentagem de um determinado valor.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Retorna um valor `percentage` com base no `value` especificado. Se o `value` especificado for `null`, `Percentage.From` retornará `null`. Se o `value` especificado for `text` com um símbolo de porcentagem final, o número decimal convertido será retornado. Caso contrário, o valor será convertido para um `number` usando `Number.From`. Um `culture` opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1
Obtém o valor `percentage` de `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
