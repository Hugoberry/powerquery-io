---
title: Logical.ToText
---

# Logical.ToText


## Description

Gibt auf der Grundlage eines logischen Werts den Text &#34;true&#34; oder &#34;false&#34; zurück.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Erstellt einen Textwert auf der Grundlage des logischen Werts "<code>logicalValue</code>" (entweder <code>true</code> oder <code>false</code>). Ist "<code>logicalValue</code>" kein logischer Wert, wird eine Ausnahme ausgelöst.


## Examples

### Example #1 
Erstellt einen Textwert auf der Grundlage des logischen Werts &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
