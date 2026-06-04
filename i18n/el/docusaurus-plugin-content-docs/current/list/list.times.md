---
title: List.Times
---

# List.Times


Δημιουργεί μια λίστα τιμών time με βάση μια αρχική τιμή, το πλήθος και την επαυξητική τιμή διάρκειας.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Επιστρέφει μια λίστα τιμών `time` μεγέθους `count`, που αρχίζουν από το `start`. Η προσαύξηση που δίνεται, `step`, είναι μια τιμή `duration` που προστίθεται σε κάθε τιμή.


## Examples

### Example #1
Δημιουργήστε μια λίστα με 4 τιμές που ξεκινούν από το μεσημέρι noon (#time(12, 0, 0)) και προσαυξάνονται κατά 1 ώρα (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
