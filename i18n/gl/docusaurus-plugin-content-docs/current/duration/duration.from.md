---
title: Duration.From
---

# Duration.From


Crea unha duración a partir do valor indicado.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

Devolve un valor de duración a partir do valor dado.

-   `value` : O valor do que se deriva a duración. Se o valor `value` dado é `null`, esta función devolve `null`. Se o `value` dado é unha `duración`, devólvese `value`. Os valores dos seguintes tipos pódense converter nun valor de `duration`:
    -   `text`: Un valor de `duración` a partir de formas textuais de tempo transcorrido (dh:m:s). Consulta `Duration.FromText` para obter máis detalles.
    -   `número`: Unha `duración` equivalente ao número de días enteiros e fraccionarios expresado por `value`.

Se `value` é de calquera outro tipo, devolverase un erro.


## Examples

### Example #1
Converter `2.525` nun valor `duration`.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```


### Example #2
Converter o valor de texto `"2.05:55:20.34567"` nun valor de `duration`.
```powerquery
Duration.From("2.05:55:20.34567")
```

Result: 
```powerquery
#duration(2, 5, 55, 20.3456700)
```




## Category
Duration
