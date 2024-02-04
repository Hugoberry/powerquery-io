---
title: Text.Clean
---

# Text.Clean


## Description

Gibt den Textwert ohne jegliche Steuerzeichen zurück.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Gibt einen Textwert ohne jegliche Steuerzeichen von "<code>text</code>" zurück.


## Examples

### Example #1 
Entfernt Zeilenvorschübe und andere Steuerzeichen aus einem Textwert.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
