---
title: Record.FromList
---

# Record.FromList


## Description

Επιστρέφει μια εγγραφή από μια λίστα τιμών πεδίων και ένα σύνολο πεδίων που δίνονται.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

Επιστρέφει μια εγγραφή από μια <code>list</code> τιμών πεδίων και ένα σύνολο πεδίων που δίνονται.  Η <code>fields</code> μπορεί να καθορίζεται είτε από μια λίστα τιμών κειμένου είτε από έναν τύπο εγγραφής.  Εάν τα πεδία δεν είναι μοναδικά, εμφανίζεται σφάλμα.


## Examples

### Example #1 
Δομήστε μια εγγραφή από μια λίστα τιμών πεδίων και μια λίστα ονομάτων πεδίων.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Δομήστε μια εγγραφή από μια λίστα τιμών πεδίων και έναν τύπο εγγραφής.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
