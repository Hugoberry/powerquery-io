---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Înlocuieşte textul cu datele introduse furnizate.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Înlocuieşte textul `old` din `text` original cu textul `new`. Această funcţie de înlocuire poate fi utilizată în `List.ReplaceValue` şi în `Table.ReplaceValue`.


## Examples

### Example #1
Înlocuiţi textul „hE”cu „He” în şirul „hEllo world”.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
