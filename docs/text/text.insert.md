---
title: Text.Insert
---

# Text.Insert


Inserts one text value into another at a given position.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Returns the result of inserting text value <code>newText</code> into the text value <code>text</code> at position <code>offset</code>. Positions start at number 0.


## Examples

### Example #1 
Insert &#34;C&#34; between &#34;B&#34; and &#34;D&#34; in &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
