---
title: Logical.ToText
---

# Logical.ToText


Returnerer den logiske tekstværdi "true" eller "false".


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Opretter en tekstværdi ud fra den logiske værdi `logicalValue`, enten `true` eller `false`. Hvis `logicalValue` ikke er en logisk værdi, udløses der en fejl.


## Examples

### Example #1
Opret en tekstværdi ud fra det logiske `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
