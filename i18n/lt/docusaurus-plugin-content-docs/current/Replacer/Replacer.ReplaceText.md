---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Pakeičiamas tekstas pateiktoje įvestyje.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Pakeičiamas <code>old</code> tekstas pradiniame <code>text</code> į <code>new</code> tekstą. Šią pakeitimo funkciją galima naudoti <code>List.ReplaceValue</code> ir <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Pakeiskite tekstą „hE“ tekstu „He“ eilutėje „hEllo world“.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
