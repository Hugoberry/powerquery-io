---
title: Logical.FromText
---

# Logical.FromText


Creates a logical value from the text values "true" and "false".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Creates a logical value from the text value `text`, either "true" or "false". If `text` contains a different string, an error is raised. The text value `text` is case insensitive.


## Examples

### Example #1
Create a logical value from the text string "true".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Create a logical value from the text string "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
