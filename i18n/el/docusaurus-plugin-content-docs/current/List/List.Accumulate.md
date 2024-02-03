---
title: List.Accumulate
---

# List.Accumulate


## Description

Συσσωρεύει μια τιμή σύνοψης από τα στοιχεία της λίστας.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Συσσωρεύει μια τιμή σύνοψης από τα στοιχεία της λίστας <code>list</code>, χρησιμοποιώντας <code>accumulator</code>.    Μια προαιρετική παράμετρος φύτρου, <code>seed</code>, μπορεί να οριστεί.


## Examples

### Example #1 
Συσσωρεύει την τιμή σύνοψης από τα στοιχεία της λίστας \{1, 2, 3, 4, 5} χρησιμοποιώντας ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
