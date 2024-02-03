---
title: Text.At
---

# Text.At


## Description

Returnează caracterul la poziţia specificată.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Returnează caracterul din valoarea text, <code>text</code> în poziţia <code>index</code>. Primul caracter din text este în poziţia 0.


## Examples

### Example #1 
Găsiţi caracterul din poziţia 4 în şirul „Hello, World”.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
