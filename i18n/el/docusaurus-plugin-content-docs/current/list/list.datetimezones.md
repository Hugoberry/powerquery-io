---
title: List.DateTimeZones
---

# List.DateTimeZones


Δημιουργεί μια λίστα τιμών datetimezone με βάση μια αρχική τιμή, το πλήθος και την επαυξητική τιμή διάρκειας.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Remarks

Επιστρέφει μια λίστα τιμών `datetimezone` μεγέθους `count`, που αρχίζουν από το `start`. Η προσαύξηση που δίνεται, `step`, είναι μια τιμή `duration` που προστίθεται σε κάθε τιμή.


## Examples

### Example #1
Δημιουργήστε μια λίστα με 10 τιμές που ξεκινούν 5 λεπτά πριν από την Πρωτοχρονιά (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) και προσαυξάνονται κατά 1 λεπτό (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
