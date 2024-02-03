---
title: Text.End
---

# Text.End


## Description

Vraća poslednje znakove iz teksta.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Vraća <code>text</code> vrednost koja predstavlja poslednjih <code>count</code> znakova <code>text</code> vrednosti <code>text</code>.


## Examples

### Example #1 
Preuzimanje poslednjih 5 znakova iz teksta „Hello, World“.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
