---
title: Duration.From
---

# Duration.From


Cria uma duração a partir do valor especificado.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Devolve um valor de duração a partir do valor indicado.

-   `value`: o valor a partir do qual a duração é derivada. Se `value` for `null`, esta função devolve `null`. Se `value` for um valor `duration`, é devolvido `value`. Os valores dos tipos seguintes podem ser convertidos num valor `duration`:
    -   `text`: um valor `duration` a partir de formas textuais de tempo decorrido (d.h:m:s). Consulte `Duration.FromText` para obter detalhes.
    -   `number`: um valor `duration` equivalente ao número de dias inteiros e fracionários expresso por `value`.

Se `value` for de qualquer outro tipo, é devolvido um erro.


## Examples

### Example #1
Converter `2.525` num valor `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Converta o valor de texto `"2.05:55:20.34567"` num valor `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
