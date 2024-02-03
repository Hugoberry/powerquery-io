---
title: List.Durations
---

# List.Durations


## Description

Δημιουργεί μια λίστα τιμών διάρκειας με βάση μια αρχική τιμή, το πλήθος και τηv επαυξητική τιμή διάρκειας.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Επιστρέφει μια λίστα τιμών <code>count</code> <code>duration</code>, η οποία ξεκινά από το <code>start</code> και προσαυξάνεται με τη <code>duration</code> <code>step</code> που δόθηκε.


## Examples

### Example #1 
Δημιουργήστε μια λίστα 5 τιμών που ξεκινούν από 1 ώρα και προσαυξάνονται κατά μία ώρα.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
