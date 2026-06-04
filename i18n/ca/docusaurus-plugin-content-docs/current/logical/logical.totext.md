---
title: Logical.ToText
---

# Logical.ToText


Retorna el text "true" o "false" donat un valor lògic.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Crea un valor de text a partir del valor lògic `logicalValue`, `true` o `false`. Si `logicalValue` no és un valor lògic, es produeix un error.


## Examples

### Example #1
Crea un valor de text a partir del valor lògic `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
