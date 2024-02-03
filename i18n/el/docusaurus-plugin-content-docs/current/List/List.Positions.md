---
title: List.Positions
---

# List.Positions


## Description

Επιστρέφει μια λίστα με τις αποκλίσεις για την είσοδο.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Details

Επιστρέφει μια λίστα με τις αποκλίσεις για τη λίστα εισόδου <code>list</code>.    Όταν χρησιμοποιείτε τη List.Transform για να τροποποιήσετε μια λίστα, η λίστα των θέσεων μπορεί να χρησιμοποιηθεί για να δώσει στον μετασχηματισμό πρόσβαση στη θέση.


## Examples

### Example #1 
Βρείτε τις αποκλίσεις των τιμών της λίστας \{1, 2, 3, 4, null, 5}.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
