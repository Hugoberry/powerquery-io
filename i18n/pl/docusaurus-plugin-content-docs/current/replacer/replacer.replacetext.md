---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Zamienia tekst na podane dane wejściowe.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Zamienia tekst `old` w oryginalnym ciągu `text` na tekst `new`. Tej funkcji zamieniającej można używać w funkcjach `List.ReplaceValue` i `Table.ReplaceValue`.


## Examples

### Example #1
Zamień tekst „hE” na „He” w ciągu „hEllo world”.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
