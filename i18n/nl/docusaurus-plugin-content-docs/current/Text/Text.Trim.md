---
title: Text.Trim
---

# Text.Trim


## Description

Verwijdert alle voorloop- en volgspaties.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Retourneert het resultaat van het verwijderen van alle voorloop- en volgspaties uit de tekstwaarde <code>text</code>.


## Examples

### Example #1 
Voorloop- en volgspaties verwijderen uit &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
