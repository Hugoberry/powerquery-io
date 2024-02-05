---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Tar bort alla avslutande blanksteg.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Returnerar resultatet från borttagningen av alla avslutande blanksteg från textvärdet <code>text</code>.


## Examples

### Example #1 
Ta bort avslutande blanksteg från &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
