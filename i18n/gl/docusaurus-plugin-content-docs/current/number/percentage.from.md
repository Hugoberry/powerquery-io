---
title: Percentage.From
---

# Percentage.From


Devolve un valor de porcentaxe do valor fornecido.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Devolve un valor `percentage` do `value` indicado. Se o `value` indicado é `null`, `Percentage.From` devolve `null`. Se o `value` indicado é `text` cun símbolo de porcentaxe ao final, devolverase o número decimal convertido. Se non, o valor converterase nun `number` usando `Number.From`. Tamén se pode fornecer unha `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obtén o valor de `porcentaxe` de `"12,3 %"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
