---
title: Value.Type
---

# Value.Type


Επιστρέφει τον τύπο της παρεχόμενης τιμής.


## Syntax

```powerquery
Value.Type(
    value as any
) as type
```


## Remarks

Επιστρέφει τον τύπο της παρεχόμενης τιμής.

-   `value`: Η τιμή της οποίας ο τύπος επιστρέφεται.


## Examples

### Example #1
Επιστρέφει τον τύπο του καθορισμένου αριθμού.
```powerquery
Value.Type(243.448)
```

Result: 
```powerquery
type number
```


### Example #2
Επιστρέφει τον τύπο της καθορισμένης ημερομηνίας.
```powerquery
Value.Type(#date(2010, 12, 31))
```

Result: 
```powerquery
type date
```


### Example #3
Επιστρέφει τον τύπο της καθορισμένης εγγραφής.
```powerquery
Value.Type([a = 1, b = 2])
```

Result: 
```powerquery
type record
```




## Category
Values
