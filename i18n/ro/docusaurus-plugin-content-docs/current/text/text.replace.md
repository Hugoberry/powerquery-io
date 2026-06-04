---
title: Text.Replace
---

# Text.Replace


Înlocuieşte toate ocurenţele subşirurilor date în text.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Returnează rezultatul înlocuirii tuturor ocurenţelor valorii text `old` din valoarea text `text` cu valoarea text `new`. Această funcţie este sensibilă la litere mari şi mici.


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
