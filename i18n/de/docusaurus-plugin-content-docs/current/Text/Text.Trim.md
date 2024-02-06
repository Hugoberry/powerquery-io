---
title: Text.Trim
---

# Text.Trim


Entfernt alle führenden und nachfolgenden Leerzeichen.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Gibt das Ergebnis des Entfernens aller führenden und nachfolgenden Leerzeichen aus dem Textwert "<code>text</code>" zurück.


## Examples

### Example #1 
Entfernt die führenden und nachfolgenden Leerzeichen aus &#34;     a b c d    &#34;.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
