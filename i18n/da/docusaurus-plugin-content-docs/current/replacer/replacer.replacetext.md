---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Erstatter tekst i det angivne input.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Erstatter teksten `old` i den oprindelige `text` med teksten `new`. Denne erstatningsfunktion kan bruges i `List.ReplaceValue` og `Table.ReplaceValue`.


## Examples

### Example #1
Erstat teksten "hE" med "He" i strengen "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
