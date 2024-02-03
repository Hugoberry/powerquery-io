---
title: List.Dates
---

# List.Dates


## Description

Δημιουργεί μια λίστα τιμών date με βάση μια αρχική τιμή, το πλήθος και την επαυξητική τιμή διάρκειας.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Επιστρέφει μια λίστα τιμών <code>date</code> μεγέθους <code>count</code>, που αρχίζουν από το <code>start</code>. Η προσαύξηση που δίνεται, <code>step</code>, είναι μια τιμή <code>duration</code> που προστίθεται σε κάθε τιμή.


## Examples

### Example #1 
Δημιουργήστε μια λίστα 5 τιμών που ξεκινούν πριν από την Πρωτοχρονιά (#date(2011, 12, 31)) και προσαυξάνονται κατά 1 ημέρα (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
