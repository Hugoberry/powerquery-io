---
title: List.Dates
---

# List.Dates


Δημιουργεί μια λίστα τιμών date με βάση μια αρχική τιμή, το πλήθος και την επαυξητική τιμή διάρκειας.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Επιστρέφει μια λίστα τιμών `date` μεγέθους `count`, που αρχίζουν από το `start`. Η προσαύξηση που δίνεται, `step`, είναι μια τιμή `duration` που προστίθεται σε κάθε τιμή.


## Examples

### Example #1
Create a list of 5 values starting from New Year's Eve (#date(2011, 12, 31)) incrementing by 1 day (#duration(1, 0, 0, 0)).
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
