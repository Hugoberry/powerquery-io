---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Lecseréli a szöveget a megadott bemeneti adatban.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Lecseréli az eredeti `text` elemben levő `old` szöveget az új `new` szövegre. Ez a lecserélő függvény a `List.ReplaceValue` és a `Table.ReplaceValue` függvényben használható.


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
