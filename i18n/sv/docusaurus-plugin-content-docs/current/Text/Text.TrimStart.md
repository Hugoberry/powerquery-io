---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Tar bort alla inledande blanksteg.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Returnerar resultatet från borttagningen av alla inledande blanksteg från textvärdet <code>text</code>.


## Examples

### Example #1 
Ta bort inledande blanksteg från &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
