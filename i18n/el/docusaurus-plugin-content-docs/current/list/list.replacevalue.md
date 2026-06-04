---
title: List.ReplaceValue
---

# List.ReplaceValue


Αναζητά την καθορισμένη τιμή σε μια λίστα και την αντικαθιστά.


## Syntax

```powerquery
List.ReplaceValue(
    list as list,
    oldValue as any,
    newValue as any,
    replacer as function
) as list
```


## Remarks

Αναζητά μια λίστα τιμών, `list`, για την τιμή `oldValue` και αντικαθιστά κάθε εμφάνιση με το κείμενο αντικατάστασης `newValue`.


## Examples

### Example #1
Αντικαταστήστε όλες τις τιμές "a" στη λίστα \{"a", "B", "a", "a"\} με την τιμή "A".
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
