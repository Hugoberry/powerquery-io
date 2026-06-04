---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Nahradí text v zadaném vstupu.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Nahradí text `old` v původním záznamu `text` textem `new`. Tento nahrazovač lze použít u hodnot `List.ReplaceValue` a `Table.ReplaceValue`.


## Examples

### Example #1
Nahradí v řetězci "hEllo world" podřetězec "hE" podřetězcem "He".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
