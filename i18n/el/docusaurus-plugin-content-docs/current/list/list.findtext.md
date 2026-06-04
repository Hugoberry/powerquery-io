---
title: List.FindText
---

# List.FindText


Επιστρέφει μια λίστα τιμών (συμπεριλαμβανομένων πεδίων εγγραφών) που περιέχουν το καθορισμένο κείμενο.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

Επιστρέφει μια λίστα των τιμών από τη λίστα `list` οι οποίες περιείχαν την τιμή `text`.


## Examples

### Example #1
Βρείτε τις τιμές κειμένου της λίστας \{"a", "b", "ab"\} που συμφωνούν με "a".
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
