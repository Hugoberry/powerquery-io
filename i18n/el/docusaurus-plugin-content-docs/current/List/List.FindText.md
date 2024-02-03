---
title: List.FindText
---

# List.FindText


## Description

Επιστρέφει μια λίστα τιμών (συμπεριλαμβανομένων πεδίων εγγραφών) που περιέχουν το καθορισμένο κείμενο.


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

Επιστρέφει μια λίστα των τιμών από τη λίστα <code>list</code> οι οποίες περιείχαν την τιμή <code>text</code>.


## Examples

### Example #1 
Βρείτε τις τιμές κειμένου της λίστας \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} που συμφωνούν με &#34;a&#34;. 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
