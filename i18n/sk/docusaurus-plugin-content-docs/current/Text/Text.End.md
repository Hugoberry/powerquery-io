---
title: Text.End
---

# Text.End


## Description

Vráti posledné znaky textu.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Vráti hodnotu <code>text</code>, ktorú tvoria posledné znaky v počte: <code>count</code> hodnoty <code>text</code> <code>text</code>.


## Examples

### Example #1 
Získajte posledných 5 znakov textu &#34;Hello, World&#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
