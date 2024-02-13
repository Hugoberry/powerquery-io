---
title: Text.Insert
---

# Text.Insert


Infogar ett textvärde i ett annat vid en angiven position.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Returnerar resultatet av att textvärdet <code>newText</code> infogas i textvärdet <code>text</code> vid position <code>offset</code>. Positioner börjar vid 0.


## Examples

### Example #1 
Infoga &#34;C&#34; mellan &#34;B&#34; och &#34;D&#34; i &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
