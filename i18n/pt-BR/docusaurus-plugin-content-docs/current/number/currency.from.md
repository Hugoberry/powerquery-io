---
title: Currency.From
---

# Currency.From


Retorna um valor de moeda de um determinado valor.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Retorna um valor de `currency` com base no `value` especificado. Se o `value` especificado for `null`, `Currency.From` retornará `null`. Se o `value` especificado for `number` dentro do intervalo de moeda, a parte fracional de `value` será arredondada para 4 dígitos decimais e retornada. Se o `value` for de qualquer outro tipo, será convertido primeiro para um `number` usando `Number.FromText`. O intervalo válido para moeda é `-922,337,203,685,477.5808` a `922,337,203,685,477.5807`. Confira `Number.Round` para os modos de arredondamento disponíveis. O padrão é `RoundingMode.ToEven`. Um `culture` opcional também pode ser fornecido (por exemplo, "pt-BR").


## Examples

### Example #1
Obtenha o valor de `moeda` de `"1,23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Obter o valor de `moeda` `"1.23455"` usando `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
