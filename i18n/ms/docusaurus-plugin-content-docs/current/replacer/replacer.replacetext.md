---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Menggantikan teks dalam input yang ditentukan.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Menggantikan teks `old` dalam asal `text` dengan teks `new`. Fungsi pengganti ini boleh digunakan dalam `List.ReplaceValue` dan `Table.ReplaceValue`.


## Examples

### Example #1
Gantikan teks "hE" dengan "He" dalam rentetan "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
