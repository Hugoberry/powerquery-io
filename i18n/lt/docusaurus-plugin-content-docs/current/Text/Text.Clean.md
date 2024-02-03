---
title: Text.Clean
---

# Text.Clean


## Description

Pateikiama tekstinė reikšmė su pašalintais visais valdymo simboliais.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Pateikiama tekstinė reikšmė su pašalintais visais <code>text</code> valdymo simboliais.


## Examples

### Example #1 
Pašalinkite įvedimo į eilutę ir kitus valdymo simbolius iš tekstinės reikšmės.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
