---
title: Logical.From
---

# Logical.From


Cria uma lógica a partir do valor especificado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Retorna um valor `logical` com base no `value` especificado. Se o `value` especificado for `null`, `Logical.From` retornará `null`. Se o `value` especificado for `logical`, `value` será retornado. Os valores dos tipos a seguir podem ser convertidos em um valor `logical`:

-   `text`: um valor `logical` do valor de texto, `"true"` ou `"false"`. Consulte `Logical.FromText` para obter informações detalhadas.
-   `number`: `false` se `value` for igual a `0`; do contrário, `true` será retornado.

Se `value` for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1
Converta `2` em um valor `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
