---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


## Description

Υποδεικνύει αν ένας τύπος εγγραφής είναι ανοιχτός.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Details

Επιστρέφει μια λογική τιμή <code>logical</code> που υποδεικνύει αν μια εγγραφή <code>type</code> είναι ανοιχτή.


## Examples

### Example #1 
Προσδιορισμός του κατά πόσο η εγγραφή &lt;code&gt;type [ A = number, ...]&lt;/code&gt; είναι ανοιχτή.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
