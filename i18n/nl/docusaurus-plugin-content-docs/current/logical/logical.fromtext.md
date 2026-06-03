---
title: Logical.FromText
---

# Logical.FromText


Maakt een logische waarde van de tekstwaarde "true" en "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Maakt een logische waarde van de tekstwaarde `text`: 'waar' of 'onwaar'. Als `text` een andere tekenreeks bevat, treedt er een fout op. De tekstwaarde `text` is hoofdlettergevoelig.


## Examples

### Example #1
Een logische waarde van de tekenreeks "true" maken.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Een logische waarde van de tekenreeks "a" maken.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
