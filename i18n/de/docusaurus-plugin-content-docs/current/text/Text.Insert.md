---
title: Text.Insert
---

# Text.Insert


Fügt einen Textwert an einer angegebenen Position in einen anderen Textwert ein.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Gibt das Ergebnis zurück, das entsteht, wenn der Textwert "<code>newText</code>" an der Position <code>offset</code> in den Textwert "<code>text</code>" eingefügt wird. Positionen beginnen bei 0.


## Examples

### Example #1 
Fügt &#34;C&#34; zwischen &#34;B&#34; und &#34;D&#34; in &#34;ABD&#34; ein.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
