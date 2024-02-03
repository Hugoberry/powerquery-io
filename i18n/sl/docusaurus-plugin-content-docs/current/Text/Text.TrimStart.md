---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Odstrani vse začetne presledke.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Vrne rezultat odstranitve vseh začetnih presledkov iz besedilne vrednosti <code>text</code>.


## Examples

### Example #1 
Odstranite začetne presledke iz &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
