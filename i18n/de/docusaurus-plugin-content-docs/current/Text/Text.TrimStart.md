---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Entfernt alle führenden Leerzeichen.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

Gibt das Ergebnis des Entfernens aller führenden Leerzeichen aus dem Textwert "<code>text</code>" zurück.


## Examples

### Example #1 
Entfernt die führenden Leerzeichen aus &#34;     a b c d    &#34;.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
