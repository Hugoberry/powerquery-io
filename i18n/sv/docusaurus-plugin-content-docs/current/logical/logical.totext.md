---
title: Logical.ToText
---

# Logical.ToText


Returnerar texten "true" eller "false" baserat på ett logiskt värde.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Skapar ett textvärde från det logiska värdet `logicalValue`, antingen `true` eller `false`. Om `logicalValue` inte är ett logiskt värde genereras ett undantag.


## Examples

### Example #1
Skapa ett textvärde från det logiska värdet `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
