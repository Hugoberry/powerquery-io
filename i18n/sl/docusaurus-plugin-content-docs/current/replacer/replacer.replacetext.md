---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Zamenja besedilo v podanem vnosu.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Zamenja besedilo `old` v izvirnem `text` z besedilom `new`. To funkcijo zamenjevalnika lahko uporabite v `List.ReplaceValue` in `Table.ReplaceValue`.


## Examples

### Example #1
Zamenjajte besedilo"hE"z besedilom"He"v nizu"hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
