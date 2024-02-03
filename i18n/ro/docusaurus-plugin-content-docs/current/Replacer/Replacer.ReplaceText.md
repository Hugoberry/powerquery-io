---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Înlocuieşte textul cu datele introduse furnizate.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Înlocuieşte textul <code>old</code> din <code>text</code> original cu textul <code>new</code>. Această funcţie de înlocuire poate fi utilizată în <code>List.ReplaceValue</code> şi în <code>Table.ReplaceValue</code>.


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
