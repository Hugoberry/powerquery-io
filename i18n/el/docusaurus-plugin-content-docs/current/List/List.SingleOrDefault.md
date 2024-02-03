---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Επιστρέφει το στοιχείο λίστας ένα για μια λίστα μήκους ένα και την προεπιλεγμένη τιμή για μια κενή λίστα.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Εάν υπάρχει μόνο ένα στοιχείο στη λίστα <code>list</code>, επιστρέφει αυτό το στοιχείο.    Εάν η λίστα είναι κενή, η συνάρτηση επιστρέφει την τιμή null, εκτός αν έχει καθοριστεί μια προαιρετική <code>default</code>. Εάν υπάρχουν περισσότερα από ένα στοιχεία στη λίστα, η συνάρτηση επιστρέφει σφάλμα.


## Examples

### Example #1 
Βρείτε τη μοναδική τιμή της λίστας \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Βρείτε τη μοναδική τιμή της λίστας \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Βρείτε τη μοναδική τιμή της λίστας \{}. Εάν η λίστα είναι κενή, επιστρέφεται η τιμή -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
