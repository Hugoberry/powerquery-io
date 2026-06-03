---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Ersätter text i angivna indata.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Ersätter texten `old` i ursprungliga `text` med texten `new`. Den här ersättningsfunktionen kan användas i `List.ReplaceValue` och `Table.ReplaceValue`.


## Examples

### Example #1
Ersätt texten "hE" med "He" i strängen "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
