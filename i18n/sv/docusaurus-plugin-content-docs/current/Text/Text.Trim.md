---
title: Text.Trim
---

# Text.Trim


## Description

Tar bort alla inledande och avslutande blanksteg.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Returnerar resultatet från borttagningen av alla inledande och avslutande blanksteg från textvärdet <code>text</code>.


## Examples

### Example #1 
Ta bort inledande och avslutande blanksteg från &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
