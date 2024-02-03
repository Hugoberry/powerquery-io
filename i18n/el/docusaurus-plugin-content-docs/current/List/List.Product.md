---
title: List.Product
---

# List.Product


## Description

Επιστρέφει το γινόμενο των αριθμών της λίστας.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

Επιστρέφει το γινόμενο των αριθμών της λίστας, <code>numbersList</code>, που δεν είναι null. Επιστρέφει την τιμή null εάν δεν υπάρχουν τιμές στη λίστα που δεν είναι null.


## Examples

### Example #1 
Βρείτε το γινόμενο των αριθμών της λίστας &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
