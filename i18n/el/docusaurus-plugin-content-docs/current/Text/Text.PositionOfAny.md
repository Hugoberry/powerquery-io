---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Επιστρέφει την πρώτη θέση της τιμής κειμένου οποιουδήποτε χαρακτήρα στη λίστα (-1 εάν δεν βρεθεί).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Επιστρέφει την πρώτη θέση οποιουδήποτε χαρακτήρα στη λίστα <code>characters</code> που βρίσκεται στο <code>text</code>.    Μπορεί να χρησιμοποιηθεί μια προαιρετική παράμετρος <code>occurrence</code> για τον καθορισμό της θέσης εμφάνισης που θα επιστραφεί.


## Examples

### Example #1 
Βρείτε την πρώτη θέση των &#34;W&#34; ή &#34;H&#34; στο κείμενο &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Βρείτε όλες τις θέσεις &#34;W&#34; ή &#34;H&#34; στο κείμενο &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
