---
title: Text.PositionOfAny
---

# Text.PositionOfAny


Επιστρέφει την πρώτη θέση της τιμής κειμένου οποιουδήποτε χαρακτήρα στη λίστα (-1 εάν δεν βρεθεί).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Remarks

Επιστρέφει την πρώτη θέση οποιουδήποτε χαρακτήρα στη λίστα `characters` που βρίσκεται στο `text`. Μπορεί να χρησιμοποιηθεί μια προαιρετική παράμετρος `occurrence` για τον καθορισμό της θέσης εμφάνισης που θα επιστραφεί.


## Examples

### Example #1
Βρείτε την πρώτη θέση των "W" ή "H" στο κείμενο "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2
Βρείτε όλες τις θέσεις "W" ή "H" στο κείμενο "Hello, World!".
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
