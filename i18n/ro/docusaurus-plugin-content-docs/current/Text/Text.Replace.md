---
title: Text.Replace
---

# Text.Replace


## Description

Înlocuieşte toate ocurenţele subşirurilor date în text.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Returnează rezultatul înlocuirii tuturor ocurenţelor valorii text <code>old</code> din valoarea text <code>text</code> cu valoarea text <code>new</code>. Această funcţie este sensibilă la litere mari şi mici.


## Examples

### Example #1 
Înlocuiţi fiecare ocurenţă a cuvântului „the” dintr-o propoziţie cu „a”.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
