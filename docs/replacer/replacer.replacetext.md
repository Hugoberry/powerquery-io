---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Replaces text within the provided input.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Replaces the `old` text in the original `text` with the `new` text. This replacer function can be used in `List.ReplaceValue` and `Table.ReplaceValue`.


## Examples

### Example #1
Replace the text "hE" with "He" in the string "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
