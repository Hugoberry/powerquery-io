---
title: Logical.ToText
---

# Logical.ToText


Returns the text "true" or "false" given a logical value.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Creates a text value from the logical value `logicalValue`, either `true` or `false`. If `logicalValue` is not a logical value, an error is raised.


## Examples

### Example #1
Create a text value from the logical `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
