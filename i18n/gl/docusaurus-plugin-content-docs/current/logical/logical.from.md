---
title: Logical.From
---

# Logical.From


Crea unha lóxica a partir do valor indicado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Devolve un valor `logical` a partir do `value` indicado. Se o valor `value` é `null`, `Logical.From` devolve `null`. Se o valor `value` é `logical`, devólvese `value`. Pódense converter a un valor `logical` os valores dos seguintes tipos:

-   `text`: un valor `logical` a partir do valor de texto, xa sexa `"true"` ou `"false"`. Consulte `Logical.FromText` para obter máis información.
-   `number`: `false` se `value` é igual que `0`, se non, `true`.

Se `value` é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1
Converter `2` nun valor `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
