---
title: Text.At
---

# Text.At


## Description

Pateikiamas simbolis nurodytoje padėtyje.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Pateikiamas simbolis tekstinėje reikšmėje <code>text</code>, padėtyje <code>index</code>. Pirmasis teksto simbolis yra 0 padėtyje.


## Examples

### Example #1 
Raskite simbolį 4 padėtyje eilutėje „Hello, World“.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
