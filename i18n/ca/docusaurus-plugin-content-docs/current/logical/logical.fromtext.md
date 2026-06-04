---
title: Logical.FromText
---

# Logical.FromText


Crea un valor lògic a partir dels valors de text "true" i "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Crea un valor lògic a partir del valor de text `text`, "true" o "false". Si `text` conté una cadena diferent, es produeix un error. El valor de text `text` distingeix entre majúscules i minúscules.


## Examples

### Example #1
Crea un valor lògic a partir de la cadena de text "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Crea un valor lògic a partir de la cadena de text "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
