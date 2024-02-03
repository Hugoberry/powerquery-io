---
title: List.Alternate
---

# List.Alternate


## Description

Επιστρέφει μια λίστα που αποτελείται από όλα τα περιττά αριθμημένα στοιχεία απόκλισης σε μια λίστα.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Επιστρέφει μια λίστα που αποτελείται από όλα τα περιττά αριθμημένα στοιχεία απόκλισης σε μια λίστα. Εναλλάσσεται μεταξύ της λήψης και της παράλειψης τιμών από τη λίστα <code>list</code> ανάλογα με τις παραμέτρους.    <ul>    <li><code>count</code>: Καθορίζει τον αριθμό των τιμών που παραλείπονται κάθε φορά.</li>    <li><code>repeatInterval</code>: Ένα προαιρετικό διάστημα επανάληψης το οποίο υποδεικνύει πόσες τιμές προστίθενται μεταξύ των επαναλαμβανόμενων τιμών.</li>    <li><code>offset</code>: Μια παράμετρος επιλογής απόκλισης προκειμένου να ξεκινά η παράλειψη τιμών μετά την αρχική απόκλιση.</li>    </ul>


## Examples

### Example #1 
Δημιουργήστε μια λίστα από \{1..10} που παραλείπει τον πρώτο αριθμό.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Δημιουργήστε μια λίστα από \{1..10} που παραλείπει κάθε δεύτερο αριθμό.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Δημιουργήστε μια λίστα από \{1..10} που ξεκινά από το 1 και παραλείπει κάθε δεύτερο αριθμό.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Δημιουργήστε μια λίστα από \{1..10} που ξεκινά από το 1, παραλείπει μια τιμή, διατηρεί δύο τιμές και ούτω καθεξής.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection