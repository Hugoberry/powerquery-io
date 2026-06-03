---
title: Currency.From
---

# Currency.From


Retorna um valor monetário a partir do valor indicado.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve um valor de `currency` a partir do `value` fornecido. Se o fornecido `value` for `null`, `Currency.From` devolve `null`. Se o fornecido `value` for `number` dentro do intervalo monetário, a parte fracional de `value` é arredondada para 4 dígitos decimais e devolvida. Se o fornecido `value` for de outro tipo, será primeiro convertido para um `number` utilizando `Number.FromText`. Intervalo monetário válido é `-922,337,203,685,477.5808` para `922,337,203,685,477.5807`. Consulte o `Number.Round` para os modos de arredondamento disponíveis. O predefinido é `RoundingMode.ToEven`. Um opcional `culture` também poderá ser fornecido (por exemplo, "en-US").


## Examples

### Example #1
Obtém o valor `currency` de `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Obtenha o valor `currency` de `"1.23455"` utilizando `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
