---
title: Record.Combine
---

# Record.Combine


Συνδυάζει τις εγγραφές της λίστας που δίνεται.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Συνδυάζει τις εγγραφές της `records` που δίνεται. Εάν η `records` περιέχει τιμές που δεν υπάρχουν στην εγγραφή, επιστρέφεται σφάλμα.


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
