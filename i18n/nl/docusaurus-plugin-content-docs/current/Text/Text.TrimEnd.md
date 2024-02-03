---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Verwijdert alle volgspaties.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

Retourneert het resultaat van het verwijderen van alle volgspaties uit de tekstwaarde <code>text</code>.


## Examples

### Example #1 
Volgspaties verwijderen uit &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
