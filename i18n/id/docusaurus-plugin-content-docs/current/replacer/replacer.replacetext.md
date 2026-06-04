---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Mengganti teks dalam input yang diberikan.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Mengganti teks `old` dalam `text` asli dengan teks `new`. Fungsi pengganti ini dapat digunakan dalam `List.ReplaceValue` dan `Table.ReplaceValue`.


## Examples

### Example #1
Mengganti teks "hE" dengan "He" dalam string "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
