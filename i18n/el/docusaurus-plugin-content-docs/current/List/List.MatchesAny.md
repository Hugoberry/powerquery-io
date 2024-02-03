---
title: List.MatchesAny
---

# List.MatchesAny


## Description

Επιστρέφει την τιμή true εάν η συνάρτηση συνθήκης ικανοποιείται από οποιαδήποτε τιμή.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Details

Επιστρέφει την τιμή <code>true</code> εάν η συνάρτηση συνθήκης, <code>condition</code>, ικανοποιείται από οποιαδήποτε τιμή της λίστας <code>list</code>, διαφορετικά επιστρέφει την τιμή <code>false</code>.


## Examples

### Example #1 
Βρείτε εάν οποιαδήποτε από τις τιμές της λίστας \{9, 10, 11} είναι μεγαλύτερη του 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Βρείτε εάν οποιαδήποτε από τις τιμές της λίστας τις αρχικές τιμές της λίστας \{1, 2, 3} είναι μεγαλύτερη του 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
