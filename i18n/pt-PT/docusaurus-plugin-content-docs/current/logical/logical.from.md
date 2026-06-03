---
title: Logical.From
---

# Logical.From


Cria um valor lógico a partir do valor especificado.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Devolve um valor `logical` a partir do `value` especificado. Se o `value` especificado for `null`, `Logical.From` devolve `null`. Se o `value` especificado for `logical`, será devolvido `value`. É possível converter os seguintes tipos de valor num valor `logical`:

-   `text`: um valor `logical` do valor de texto `"true"` ou `"false"`. Consulte `Logical.FromText` para obter detalhes.
-   `number`: `false` se `value` for igual a `0`, `true` caso contrário.

Se `value` for de qualquer outro tipo, será devolvido um erro.


## Examples

### Example #1
Converter `2` num valor `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
