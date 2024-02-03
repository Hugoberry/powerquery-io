---
title: List.Numbers
---

# List.Numbers


## Description

Επιστρέφει μια λίστα τιμών αριθμών με βάση μια αρχική τιμή, το πλήθος και προαιρετικά τηv επαυξητική τιμή.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Επιστρέφει μια λίστα τιμών αριθμών με βάση μια αρχική τιμή, το πλήθος και προαιρετικά τηv επαυξητική τιμή. Η προεπιλεγμένη τιμή επαύξησης είναι 1.<ul>   <li><code>start</code>: Η αρχική τιμή της λίστας.</li>   <li><code>count</code>: Ο αριθμός των τιμών που θα δημιουργηθούν.</li>   <li><code>increment</code>: <i>[Προαιρετική]</i> Η τιμή επαύξησης. Εάν παραλειφθεί, οι τιμές αυξάνονται κατά 1.</li></ul>


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
