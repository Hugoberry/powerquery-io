---
title: Logical.FromText
---

# Logical.FromText


Erstellt einen logischen Wert auf der Grundlage der Textwerte &#34;true&#34; und &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Erstellt einen logischen Wert auf der Grundlage des Textwerts "<code>text</code>" (entweder "true" oder "false"). Enthält "<code>text</code>" eine andere Zeichenfolge, wird eine Ausnahme ausgelöst. Beim Textwert "<code>text</code>" wird nicht zwischen Groß-/Kleinschreibung unterschieden.


## Examples

### Example #1 
Erstellt einen logischen Wert auf der Grundlage der Textzeichenfolge &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Erstellt einen logischen Wert auf der Grundlage der Textzeichenfolge &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
