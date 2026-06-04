---
title: Text.End
---

# Text.End


Visszaadja a szöveg utolsó karakterét.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Egy `text` értéket ad vissza, amely az utolsó `count` karaktert tartalmazza a `text` `text` értékből.


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
