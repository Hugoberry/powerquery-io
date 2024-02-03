---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Zamenjuje tekst u okviru navedenog unosa.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Zamenjuje tekst <code>old</code> u prvobitnom <code>text</code> tekstom <code>new</code>. Ova funkcija zamene se može koristiti u <code>List.ReplaceValue</code> i <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Zamena teksta „hE“ tekstom „He“ u okviru niske „hEllo world“.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
