---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Zamienia tekst na podane dane wejściowe.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Zamienia tekst <code>old</code> w oryginalnym ciągu <code>text</code> na tekst <code>new</code>. Tej funkcji zamieniającej można używać w funkcjach <code>List.ReplaceValue</code> i <code>Table.ReplaceValue</code>.


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
