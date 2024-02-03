---
title: Text.Start
---

# Text.Start


## Description

Vraća početak teksta.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Vraća prvi <code>count</code> znak iz <code>text</code> kao tekstualnu vrednost.


## Examples

### Example #1 
Preuzimanje prvih 5 znakova iz teksta „Hello, World“.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
