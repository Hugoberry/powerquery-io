---
title: List.DateTimes
---

# List.DateTimes


## Description

Δημιουργεί μια λίστα τιμών datetime με βάση μια αρχική τιμή, το πλήθος και την επαυξητική τιμή διάρκειας.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Επιστρέφει μια λίστα τιμών <code>datetime</code> μεγέθους <code>count</code>, που αρχίζουν από το <code>start</code>. Η προσαύξηση που δίνεται, <code>step</code>, είναι μια τιμή <code>duration</code> που προστίθεται σε κάθε τιμή.


## Examples

### Example #1 
Δημιουργήστε μια λίστα με 10 τιμές που ξεκινούν 5 λεπτά πριν από την Πρωτοχρονιά (#datetime(2011, 12, 31, 23, 55, 0)) και προσαυξάνονται κατά 1 λεπτό (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
