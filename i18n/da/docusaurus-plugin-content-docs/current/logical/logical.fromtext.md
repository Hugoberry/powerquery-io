---
title: Logical.FromText
---

# Logical.FromText


Opretter en logisk værdi ud fra tekstværdien "true" og "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Opretter en logisk værdi ud fra tekstværdien `text`, "true" eller "false". Hvis `text` indeholder en anden streng, udløses der en fejl. Der skelnes mellem store og små bogstaver i tekstværdien `text`.


## Examples

### Example #1
Opret en logisk værdi ud fra tekststrengen "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Opret en logisk værdi ud fra tekststrengen "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
