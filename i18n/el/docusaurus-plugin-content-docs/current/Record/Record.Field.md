---
title: Record.Field
---

# Record.Field


## Description

Επιστρέφει την τιμή του καθορισμένου πεδίου μιας εγγραφής.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

Επιστρέφει την τιμή του καθορισμένου <code>field</code> στην <code>record</code>. Εάν το πεδίο δεν βρεθεί, παρουσιάζεται εξαίρεση.


## Examples

### Example #1 
Βρίσκει τη τιμή του πεδίου &#34;CustomerID&#34; στην εγγραφή.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
