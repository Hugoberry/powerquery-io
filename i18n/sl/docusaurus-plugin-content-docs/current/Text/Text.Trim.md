---
title: Text.Trim
---

# Text.Trim


## Description

Odstrani vse začetne in končne presledke.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Vrne rezultat odstranitve vseh začetnih in končnih presledkov iz besedilne vrednosti <code>text</code>.


## Examples

### Example #1 
Odstranite začetne in končne presledke iz &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
