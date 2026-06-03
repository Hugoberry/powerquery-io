---
title: Byte.From
---

# Byte.From


Cria um número inteiro de 8 bits a partir do valor fornecido.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve um valor de número inteiro de 8 bits `number` a partir do fornecido `value`. Se o fornecido `value` for `null`, `Byte.From` devolve `null`. Se o fornecido `value` é um `number` dentro de um intervalo de um número inteiro de 8 bits sem uma parte fracional, `value` é devolvido. Se tem uma parte fracional, o número é arredondado com o modo de arredondamento especificado. O modo de arredondamento predefinido é `RoundingMode.ToEven`. Se `value` for de algum outro tipo, será primeiro convertido para um `number` utilizando `Number.FromText`. Consulte o `Number.Round` para os modos de arredondamento disponíveis. Um opcional `culture` também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1
Obter o valor `number` inteiro de 8 bits de `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obter o valor `number` inteiro de 8 bits de `"4.5"` com `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
