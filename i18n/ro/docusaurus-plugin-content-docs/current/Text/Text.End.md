---
title: Text.End
---

# Text.End


## Description

Returnează ultimele caractere ale textului.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Returnează o valoare <code>text</code> care reprezintă ultimele <code>count</code> caractere din valoarea <code>text</code> <code>text</code>.


## Examples

### Example #1 
Obţineţi ultimele 5 caractere ale textului „Hello, World”.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
