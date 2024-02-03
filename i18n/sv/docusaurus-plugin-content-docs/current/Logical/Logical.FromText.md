---
title: Logical.FromText
---

# Logical.FromText


## Description

Skapar ett logiskt värde från textvärdena &#34;true&#34; och &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Skapar ett logiskt värde från textvärdet <code>text</code>, antingen "true" eller "false". Om <code>text</code> innehåller en annan sträng genereras ett undantag. Textvärdet <code>text</code> är skiftlägeskänsligt.


## Examples

### Example #1 
Skapa ett logiskt värde från textsträngen &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Skapa ett logiskt värde från textsträngen &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
