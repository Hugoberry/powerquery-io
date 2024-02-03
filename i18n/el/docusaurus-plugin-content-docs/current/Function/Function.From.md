---
title: Function.From
---

# Function.From


## Description

Δημιουργεί μια συνάρτηση με μια συγκεκριμένη υπογραφή παραμέτρου επάνω από μια συνάρτηση που δέχεται ένα όρισμα μίας λίστας


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

Χρησιμοποιεί μια μοναδιαία συνάρτηση <code>function</code> και δημιουργεί μια νέα συνάρτηση με τον τύπο <code>functionType</code>, ο οποίος κατασκευάζει μια λίστα από τα ορίσματά του και τη διαβιβάζει στο <code>function</code>.


## Examples

### Example #1 
Μετατρέπει το List.Sum σε μια συνάρτηση δύο ορισμάτων της οποίας τα ορίσματα προστίθενται μαζί
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
Μετατρέπει μια συνάρτηση που δέχεται μια λίστα σε μια συνάρτηση δύο ορισμάτων
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
