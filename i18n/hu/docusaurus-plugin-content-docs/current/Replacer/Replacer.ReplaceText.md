---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Lecseréli a szöveget a megadott bemeneti adatban.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Lecseréli az eredeti <code>text</code> elemben levő <code>old</code> szöveget az új <code>new</code> szövegre. Ez a lecserélő függvény a <code>List.ReplaceValue</code> és a <code>Table.ReplaceValue</code> függvényben használható.


## Examples

### Example #1 
A „hE” szöveg lecserélése a „He” szövegre a „hEllo world” sztringben
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
