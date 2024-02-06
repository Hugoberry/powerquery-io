---
title: Text.SplitAny
---

# Text.SplitAny


Gibt eine Liste mit Textwerten zurück – geteilt an jedem der Zeichen des Trennzeichens.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

Gibt eine Liste mit Textwerten zurück, für die ein Textwert (<code>text</code>) auf der Grundlage der Zeichen des angegebenen Trennzeichens (<code>separators</code>) aufgeteilt wurde.


## Examples

### Example #1 
Erstellt eine Liste auf der Grundlage des Textwerts &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
