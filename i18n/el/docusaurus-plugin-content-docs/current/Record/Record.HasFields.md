---
title: Record.HasFields
---

# Record.HasFields


## Description

Υποδεικνύει αν η εγγραφή έχει τα καθορισμένα πεδία.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Υποδεικνύει αν η εγγραφή <code>record</code> έχει τα πεδία που καθορίζονται στο <code>fields</code>, επιστρέφοντας μια λογική τιμή (true ή false).    Μπορούν να καθοριστούν πολλαπλές τιμές πεδίων με τη χρήση μιας λίστας.


## Examples

### Example #1 
Ελέγχει αν η εγγραφή έχει το πεδίο &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Ελέγχει αν η εγγραφή έχει το πεδίο &#34;CustomerID&#34; και &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
