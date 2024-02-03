---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Tiek noņemtas visas beigu baltstarpas.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Tiek atgriezts rezultāts, kas tika iegūts, noņemot visas beigu baltstarpas no teksta vērtības <code>text</code>.


## Examples

### Example #1 
Noņemiet beigu baltstarpu no &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
