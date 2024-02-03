---
title: Text.End
---

# Text.End


## Description

Visszaadja a szöveg utolsó karakterét.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Egy <code>text</code> értéket ad vissza, amely az utolsó <code>count</code> karaktert tartalmazza a <code>text</code> <code>text</code> értékből.


## Examples

### Example #1 
Beolvassa a „Hello, World” karakterlánc utolsó 5 karakterét.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
