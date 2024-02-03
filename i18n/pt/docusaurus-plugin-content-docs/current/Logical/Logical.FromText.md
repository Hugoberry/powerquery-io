---
title: Logical.FromText
---

# Logical.FromText


## Description

Creates a logical value from the text values &#34;true&#34; and &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Creates a logical value from the text value <code>text</code>, either "true" or "false". If <code>text</code> contains a different string, an exception is thrown. The text value <code>text</code> is case insensitive.


## Examples

### Example #1 
Create a logical value from the text string &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Create a logical value from the text string &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
