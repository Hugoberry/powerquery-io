---
title: Text.Trim
---

# Text.Trim


## Description

Tiek noņemtas visas sākuma un beigu baltstarpas.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Tiek atgriezts rezultāts, kas tika iegūts, noņemot visas sākuma un beigu baltstarpas no teksta vērtības <code>text</code>.


## Examples

### Example #1 
Noņemiet sākuma un beigu baltstarpu no &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
