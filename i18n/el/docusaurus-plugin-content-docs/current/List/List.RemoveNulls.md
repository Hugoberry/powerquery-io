---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

Καταργεί όλες τις τιμές &#34;null&#34; από την καθορισμένη λίστα.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

Καταργεί όλες τις εμφανίσεις των τιμών "null" στην <code>list</code>. Εάν δεν υπάρχουν τιμές "null" στη λίστα, επιστρέφεται η αρχική λίστα.


## Examples

### Example #1 
Καταργήστε τις τιμές &#34;null&#34; από τη λίστα \{1, 2, 3, null, 4, 5, null, 6}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
