---
title: Text.Trim
---

# Text.Trim


## Description

Odstráni všetky úvodné aj koncové prázdne znaky.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Vráti výsledok odstránenia všetkých úvodných aj koncových prázdnych znakov z textovej hodnoty <code>text</code>.


## Examples

### Example #1 
Odstráňte úvodný aj koncový prázdny znak z textu &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
