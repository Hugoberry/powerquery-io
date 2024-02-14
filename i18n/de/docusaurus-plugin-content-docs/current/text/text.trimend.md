---
title: Text.TrimEnd
---

# Text.TrimEnd


Entfernt alle nachfolgenden Leerzeichen.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Gibt das Ergebnis des Entfernens aller nachfolgenden Leerzeichen aus dem Textwert "<code>text</code>" zurück.


## Examples

### Example #1 
Entfernt die nachfolgenden Leerzeichen aus &#34;     a b c d    &#34;.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
