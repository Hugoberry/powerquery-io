---
title: List.ReplaceValue
---

# List.ReplaceValue


## Description

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


## Details

Αναζητά μια λίστα τιμών, <code>list</code>, για την τιμή <code>oldValue</code> και αντικαθιστά κάθε εμφάνιση με το κείμενο αντικατάστασης <code>newValue</code>.


## Examples

### Example #1 
Αντικαταστήστε όλες τις τιμές &#34;a&#34; στη λίστα \{&#34;a&#34;, &#34;B&#34;, &#34;a&#34;, &#34;a&#34;} με την τιμή &#34;A&#34;.
```powerquery
List.ReplaceValue({"a", "B", "a", "a"}, "a", "A", Replacer.ReplaceText)
```

Result: 
```powerquery
{"A", "B", "A", "A"}
```




## Category
List.Transformation functions
