---
title: Value.FromText
---

# Value.FromText


Δημιουργεί μια τιμή ισχυρού τύπου από μια αναπαράσταση κειμένου.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Αποκωδικοποιεί μια τιμή από μια αναπαράσταση κειμένου και την ερμηνεύει ως τιμή με κατάλληλο τύπο.

-   `text`: Το κείμενο προς ερμηνεία.
-   `culture`: (Προαιρετικό) Μια συγκεκριμένη κουλτούρα που χρησιμοποιείται για την ερμηνεία του κειμένου (για παράδειγμα, "en-US").

Αυτή η συνάρτηση λαμβάνει μια τιμή κειμένου και επιστρέφει μια τιμή τύπου `number`, `logical`, `null`, `datetime`, `duration`, or `text`. Μια κενή τιμή κειμένου ερμηνεύεται ως τιμή `null`.


## Examples

### Example #1
Μετατρέπει το κείμενο που αντιπροσωπεύει έναν αριθμό στην αντίστοιχη αριθμητική τιμή του.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Μετατρέπει το κείμενο που αντιπροσωπεύει ένα ποσοστό στην αντίστοιχη αριθμητική τιμή του.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Μετατρέπει το κείμενο που αντιπροσωπεύει μια τιμή γαλλικού ευρώ στην αντίστοιχη αριθμητική τιμή του.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Μετατρέπει το κείμενο που αντιπροσωπεύει μια γερμανική ημερομηνία και ώρα στην αντίστοιχη τιμή ημερομηνίας και ώρας του.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
