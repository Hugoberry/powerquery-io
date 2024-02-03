---
title: Text.Start
---

# Text.Start


## Description

Vráti začiatok textu.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Vráti počet prvých znakov: <code>count</code> textu <code>text</code> ako textovú hodnotu.


## Examples

### Example #1 
Získajte prvých 5 znakov textu &#34;Hello, World&#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
