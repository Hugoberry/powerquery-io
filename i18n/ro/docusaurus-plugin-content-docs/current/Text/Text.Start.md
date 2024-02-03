---
title: Text.Start
---

# Text.Start


## Description

Returnează începutul textului.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Returnează primele <code>count</code> caractere din <code>text</code> ca valoare text.


## Examples

### Example #1 
Obţineţi primele 5 caractere din „Hello, World”.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
