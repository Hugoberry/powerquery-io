---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Erstatter tekst i det angivne input.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Erstatter teksten <code>old</code> i den oprindelige <code>text</code> med teksten <code>new</code>. Denne erstatningsfunktion kan bruges i <code>List.ReplaceValue</code> og <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Erstat teksten &#34;hE&#34; med &#34;He&#34; i strengen &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
