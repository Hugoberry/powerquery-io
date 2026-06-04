---
title: List.Numbers
---

# List.Numbers


Επιστρέφει μια λίστα τιμών αριθμών με βάση μια αρχική τιμή, το πλήθος και προαιρετικά τηv επαυξητική τιμή.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Returns a list of numbers given an initial value, count, and optional increment value. The default increment value is 1.

-   `start`: The initial value in the list.
-   `count`: The number of values to create.
-   `increment`: *(Optional)* The value to increment by. If omitted values are incremented by 1.


## Examples

### Example #1
Δημιουργήστε μια λίστα 10 διαδοχικών αριθμών που αρχίζουν από το 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2
Δημιουργήστε μια λίστα 10 που αρχίζουν από το 1, με βήμα επαύξησης 2 για κάθε επόμενο αριθμό.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
