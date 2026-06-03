---
title: Logical.ToText
---

# Logical.ToText


Gibt auf der Grundlage eines logischen Werts den Text "true" oder "false" zurück.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

Erstellt einen Textwert auf der Grundlage des logischen Werts „`logicalValue`“ (entweder `true` oder `false`). Ist `logicalValue` kein logischer Wert, wird ein Fehler ausgelöst.


## Examples

### Example #1
Erstellt einen Textwert auf der Grundlage des logischen Werts `true`.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
