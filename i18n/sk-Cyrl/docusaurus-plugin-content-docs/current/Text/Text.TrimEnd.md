---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Odstráni všetky koncové prázdne znaky.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Vráti výsledok odstránenia všetkých koncových prázdnych znakov z textovej hodnoty <code>text</code>.


## Examples

### Example #1 
Odstráňte koncový prázdny znak z textu &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
