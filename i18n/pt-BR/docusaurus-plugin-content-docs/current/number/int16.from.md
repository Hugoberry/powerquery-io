---
title: Int16.From
---

# Int16.From


Cria um inteiro de 16 bits do valor determinado.


## Syntax

```powerquery
Int16.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retorna um valor `number` inteiro de 16 bits com base no `value` especificado. Se o `value` especificado for `null`, `Int16.From` retornará `null`. Se o `value` especificado for `number` dentro do intervalo de número inteiro de 16 bits sem uma parte fracionária, `value` será retornado. Se tiver uma parte fracionária, então o número será arredondado com o modo de arredondamento especificado. O modo de arredondamento padrão é `RoundingMode.ToEven`. Se `value` for qualquer outro tipo, será convertido primeiro para um `number` usando `Number.FromText`. Confira `Number.Round` para os modos de arredondamento disponíveis. Um `culture` opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1
Obtenha o valor de `number` inteiro de 16 bits de `"4"`.
```powerquery
Int64.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Obtém o valor `number` inteiro de 16 bits de `"4.5"` usando `RoundingMode.AwayFromZero`.
```powerquery
Int16.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
