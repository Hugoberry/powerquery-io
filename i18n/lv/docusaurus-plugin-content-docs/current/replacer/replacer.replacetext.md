---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Ievades datos tiek aizstāts teksts.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Sākotnējā virknē `text` teksts `old` tiek aizstāts ar tekstu `new`. Šo aizstāšanas funkciju var izmantot izteiksmēs `List.ReplaceValue` un `Table.ReplaceValue`.


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
