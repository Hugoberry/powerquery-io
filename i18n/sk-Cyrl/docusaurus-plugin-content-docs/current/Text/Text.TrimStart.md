---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Odstráni všetky úvodné prázdne znaky.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Vráti výsledok odstránenia všetkých úvodných prázdnych znakov z textovej hodnoty <code>text</code>.


## Examples

### Example #1 
Odstráňte úvodný prázdny znak z textu &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
