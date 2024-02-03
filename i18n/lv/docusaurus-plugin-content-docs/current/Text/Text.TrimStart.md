---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Tiek noņemtas visas sākuma baltstarpas.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Tiek atgriezts rezultāts, kas tika iegūts, noņemot visas sākuma baltstarpas no teksta vērtības <code>text</code>.


## Examples

### Example #1 
Noņemiet sākuma baltstarpu no &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
