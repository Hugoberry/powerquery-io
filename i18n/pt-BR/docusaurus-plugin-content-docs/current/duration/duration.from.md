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

Retorna um valor de duração do valor fornecido.

-   `value`: o valor do qual a duração é derivada. Se o `value` fornecido for `null`, essa função retornará `null`. Se o `value` fornecido for um `duration`, `value` será retornado. Os valores dos seguintes tipos podem ser convertidos em um valor de `duration`:
    -   `text`: um valor de `duration` de formatos textuais do tempo decorrido (d.h:m:s). Consulte `Duration.FromText` para obter detalhes.
    -   `número`: Uma `duration` equivalente ao número de dias inteiros e fracionários expressos por `value`.

Se `value` for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1
Converta `2.525` em um valor `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Converta o valor de texto `"2.05:55:20.34567"` em um valor de `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
