---
title: Text.End
---

# Text.End


Returnează ultimele caractere ale textului.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Returnează o valoare `text` care reprezintă ultimele `count` caractere din valoarea `text` `text`.


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
