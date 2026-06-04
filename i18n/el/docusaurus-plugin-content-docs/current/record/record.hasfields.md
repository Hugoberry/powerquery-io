---
title: Record.HasFields
---

# Record.HasFields


Υποδεικνύει αν η εγγραφή έχει τα καθορισμένα πεδία.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Υποδεικνύει αν η εγγραφή `record` έχει τα πεδία που καθορίζονται στο `fields`, επιστρέφοντας μια λογική τιμή (true ή false). Μπορούν να καθοριστούν πολλαπλές τιμές πεδίων με τη χρήση μιας λίστας.


## Examples

### Example #1
Ελέγχει αν η εγγραφή έχει το πεδίο "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Ελέγχει αν η εγγραφή έχει το πεδίο "CustomerID" και "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
