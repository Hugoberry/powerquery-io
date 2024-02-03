---
title: Expression.Constant
---

# Expression.Constant


## Description

Επιστρέφει την αναπαράσταση κώδικα προέλευσης M μιας τιμής σταθεράς.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Επιστρέφει την αναπαράσταση κώδικα προέλευσης M μιας τιμής σταθεράς.


## Examples

### Example #1 
Λάβετε την αναπαράσταση κώδικα προέλευσης M μιας αριθμητικής τιμής.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Λάβετε την αναπαράσταση κώδικα προέλευσης M μιας τιμής ημερομηνίας.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Λάβετε την αναπαράσταση κώδικα προέλευσης M μιας τιμής κειμένου.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
