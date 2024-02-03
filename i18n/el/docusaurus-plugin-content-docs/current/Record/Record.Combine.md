---
title: Record.Combine
---

# Record.Combine


## Description

Συνδυάζει τις εγγραφές της λίστας που δίνεται.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Συνδυάζει τις εγγραφές της <code>records</code> που δίνεται. Εάν η <code>records</code> περιέχει τιμές που δεν υπάρχουν στην εγγραφή, επιστρέφεται σφάλμα.


## Examples

### Example #1 
Δημιουργεί μια συνδυασμένη εγγραφή από τις εγγραφές.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
