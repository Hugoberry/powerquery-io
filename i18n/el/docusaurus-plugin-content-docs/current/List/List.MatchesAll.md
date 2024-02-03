---
title: List.MatchesAll
---

# List.MatchesAll


## Description

Επιστρέφει την τιμή true εάν η συνάρτηση συνθήκης ικανοποιείται από όλες τις τιμές της λίστας.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Details

Επιστρέφει την τιμή <code>true</code> εάν η συνάρτηση συνθήκης, <code>condition</code>, ικανοποιείται από όλες τις τιμές της λίστας <code>list</code>, διαφορετικά επιστρέφει την τιμή <code>false</code>.


## Examples

### Example #1 
Προσδιορίστε αν όλες οι τιμές της λίστας \{11, 12, 13} είναι μεγαλύτερες του 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2 
Προσδιορίστε αν όλες οι τιμές της λίστας \{1, 2, 3} είναι μεγαλύτερες του 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```




## Category
List.Selection
