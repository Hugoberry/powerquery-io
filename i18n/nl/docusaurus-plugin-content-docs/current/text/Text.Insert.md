---
title: Text.Insert
---

# Text.Insert


Voegt één tekstwaarde in een andere tekstwaarde op de opgegeven positie in.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Retourneert het resultaat van het invoegen van tekstwaarde <code>newText</code> in de tekstwaarde <code>text</code> op positie <code>offset</code>. De positie begint bij nummer 0.


## Examples

### Example #1 
&#34;C&#34; invoegen tussen &#34;B&#34; en &#34;D&#34; in &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
