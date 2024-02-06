---
title: Logical.FromText
---

# Logical.FromText


Maakt een logische waarde van de tekstwaarde &#34;true&#34; en &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Maakt een logische waarde van de tekstwaarde <code>text</code>: "true" of "false". Als <code>text</code> een andere tekenreeks bevat, wordt er een uitzondering gegenereerd. De tekstwaarde <code>text</code> is hoofdlettergevoelig.


## Examples

### Example #1 
Een logische waarde van de tekenreeks &#34;true&#34; maken.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Een logische waarde van de tekenreeks &#34;a&#34; maken.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
