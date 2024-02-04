---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Ersetzt Text innerhalb der angegebenen Eingabe.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Ersetzt den Text "<code>old</code>" in der ursprünglichen Eingabe (<code>text</code>) durch den Text "<code>new</code>". Diese Ersetzungsfunktion kann in <code>List.ReplaceValue</code> und <code>Table.ReplaceValue</code> verwendet werden.


## Examples

### Example #1 
Ersetzt den Text &#34;hE&#34; in der Zeichenfolge &#34;hEllo world&#34; durch &#34;He&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
