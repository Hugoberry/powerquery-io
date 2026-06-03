---
title: Text.Middle
---

# Text.Middle


Gibt die Teilzeichenfolge bis zu einer bestimmten Länge zurück.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Gibt `count` Zeichen oder alle bis zum Ende `text` zurück; beim Offset `start`.


## Examples

### Example #1
Ermittelt die Teilzeichenfolge aus dem Text "Hello World", die bei Index 6 beginnt und 5 Zeichen umfasst.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Ermittelt die Teilzeichenfolge aus dem Text "Hello World", die bei Index 6 beginnt, bis zum Ende.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Ermittelt den Substring aus dem Text „Hallo Welt“, die bei Index 0 beginnt und 2 Zeichen umfasst.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
