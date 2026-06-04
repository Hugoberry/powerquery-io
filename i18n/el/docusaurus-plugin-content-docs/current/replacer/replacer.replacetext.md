---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Αντικαθιστά το κείμενο με την παρεχόμενη είσοδο.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Αντικαθιστά το κείμενο `old` στην αρχική `text` με το κείμενο `new`. Αυτή η συνάρτηση αντικατάστασης μπορεί να χρησιμοποιηθεί στις `List.ReplaceValue` και `Table.ReplaceValue`.


## Examples

### Example #1
Αντικαταστήστε το κείμενο "hE" με το "He" στη συμβολοσειρά "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
