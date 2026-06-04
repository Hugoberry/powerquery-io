---
title: Currency.From
---

# Currency.From


Devolve un valor de moeda para o valor dado.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Devolve un valor de `currency` a partir do`value` indicado. Se o `value` indicado é `null`, `Currency.From` devolve `null`. Se o `value` indicado é `number` dentro do intervalo de moeda, a parte fraccionaria de `value` arredóndase a 4 díxitos decimais e devólvese. Se `value` é doutro tipo, primeiro converterase nun `number` usando `Number.FromText`. O intervalo válido de moeda é de `-922.337.203.685.477,5808` a `922.337.203.685.477,5807`. Consulte `Number.Round` para coñecer os modos de arredondamento dispoñibles. O valor predefinido é `RoundingMode.ToEven`. Tamén se pode fornecer un `culture` opcional (por exemplo, "gl-ES").


## Examples

### Example #1
Obteña o valor `currency` de `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Obteña o valor `currency` de `"1.23455"` mediante `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
