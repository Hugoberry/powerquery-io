---
title: Percentage.From
---

# Percentage.From


Devolve um valor de percentagem do valor determinado.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve um `percentage` do fornecido `value`. Se o `value` fornecido for `null`, `Percentage.From` devolve `null`. Se o valor `value` for `text` com um símbolo de percentagem, o número decimal convertido será devolvido. Caso contrário, o valor será convertido num `number` utilizando `Number.From`. Um opcional `culture` também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1
Obter o `valor` da percentagem de `"12,3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
