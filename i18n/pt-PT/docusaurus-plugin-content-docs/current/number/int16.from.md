---
title: Int16.From
---

# Int16.From


Cria um número inteiro de 16 bits a partir do valor fornecido.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve um valor de número inteiro de 16 bits `number` do fornecido `value`. Se o `value` fornecido for `null`, `Int16.From` devolve `null`. Se o `value` fornecido for `number` no intervalo de números inteiros de 16 bits sem uma parte fracional, `value` é devolvido. Se tiver uma parte fracional, o número é arredondado com o modo de arredondamento especificado. O modo de arredondamento predefinido é `RoundingMode.ToEven`. Se `value` for de qualquer outro tipo, primeiro será convertido num `number` utilizando `Number.FromText`. Consulte `Number.Round` para ver os modos de arredondamento disponíveis. Um opcional `culture` também poderá ser fornecido (por exemplo, "en-US").


## Examples

### Example #1
Obter o valor `number` inteiro de 16 bits de `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obter o valor `number` inteiro de 16 bits de `"4.5"` com `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
