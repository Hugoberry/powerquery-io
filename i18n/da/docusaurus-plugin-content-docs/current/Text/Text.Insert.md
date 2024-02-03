---
title: Text.Insert
---

# Text.Insert


## Description

Indsætter én tekstværdi i en anden på en angivet position.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Returnerer resultatet af at indsætte tekstværdien <code>newText</code> i tekstværdien <code>text</code> på position <code>offset</code>. Positioner starter ved tallet 0.


## Examples

### Example #1 
Indsæt &#34;C&#34; mellem &#34;B&#34; og &#34;D&#34; i &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
