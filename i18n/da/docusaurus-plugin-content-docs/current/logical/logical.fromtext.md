---
title: Logical.FromText
---

# Logical.FromText


Opretter en logisk værdi ud fra tekstværdien &#34;true&#34; og &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Opretter en logisk værdi ud fra tekstværdien <code>text</code>, "true" eller "false". Hvis <code>text</code> indeholder en anden streng, udløses der en undtagelse. Der skelnes mellem store og små bogstaver i tekstværdien <code>text</code>.


## Examples

### Example #1 
Opret en logisk værdi ud fra tekststrengen &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Opret en logisk værdi ud fra tekststrengen &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
