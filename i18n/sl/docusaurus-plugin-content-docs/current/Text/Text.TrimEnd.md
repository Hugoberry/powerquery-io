---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Odstrani vse končne presledke.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Vrne rezultat odstranitve vseh končnih presledkov iz besedilne vrednosti <code>text</code>.


## Examples

### Example #1 
Odstranite končne presledke iz &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
