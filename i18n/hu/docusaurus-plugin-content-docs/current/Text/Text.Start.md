---
title: Text.Start
---

# Text.Start


## Description

A szöveg kezdetét adja vissza.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

A(z) <code>text</code> első <code>count</code> karakterét adja vissza szöveges értékként.


## Examples

### Example #1 
A „Hello, World” karakterlánc első 5 karakterének beolvasása
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
