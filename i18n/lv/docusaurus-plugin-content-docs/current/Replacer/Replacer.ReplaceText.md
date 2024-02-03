---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Ievades datos tiek aizstāts teksts.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Sākotnējā virknē <code>text</code> teksts <code>old</code> tiek aizstāts ar tekstu <code>new</code>. Šo aizstāšanas funkciju var izmantot izteiksmēs <code>List.ReplaceValue</code> un <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Virknē hEllo world aizstājiet tekstu hE ar tekstu He.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
