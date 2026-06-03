---
title: Logical.FromText
---

# Logical.FromText


Skapar ett logiskt värde från textvärdena "true" och "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Skapar ett logiskt värde från textvärdet `text`, antingen "true" eller "false". Om `text` innehåller en annan sträng genereras ett undantag. Textvärdet `text` är skiftlägeskänsligt.


## Examples

### Example #1
Skapa ett logiskt värde från textsträngen "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Skapa ett logiskt värde från textsträngen "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
