---
title: List.Max
---

# List.Max


Επιστρέφει τη μέγιστη τιμή ή την προεπιλεγμένη τιμή εάν η λίστα είναι κενή.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Επιστρέφει το μέγιστο στοιχείο στη λίστα ή την προαιρετική προεπιλεγμένη τιμή αν η λίστα είναι κενή.

-   `list`: Η λίστα των τιμών.
-   `default`: (Προαιρετικό) Η τιμή που θα επιστραφεί αν η λίστα είναι κενή.
-   `comparisonCriteria`: (Προαιρετικό) Μια συνάρτηση που χρησιμοποιείται για το μετασχηματισμό των τιμών πριν από τη σύγκρισή τους. Αν αυτή η παράμετρος είναι `null`, τότε οι τιμές συγκρίνονται χωρίς μετασχηματισμό.
-   `includeNulls`: (Προαιρετικό) Υποδεικνύει αν οι τιμές `null` στη λίστα πρέπει να συμπεριληφθούν στον καθορισμό του μέγιστου στοιχείου. Η προεπιλεγμένη τιμή είναι `true`.


## Examples

### Example #1
Βρείτε τη μέγιστη τιμή στην καθορισμένη λίστα.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Βρείτε τη μέγιστη τιμή στην καθορισμένη λίστα ή επιστρέψτε -1 αν είναι κενή.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Βρείτε το στοιχείο σε μια λίστα τιμών κειμένου που είναι τελευταία αλφαβητικά. Αν η λίστα είναι κενή, επιστρέψτε "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Βρείτε την πιο πρόσφατη ημερομηνία από μια λίστα με γερμανικές ημερομηνίες. Αν η λίστα είναι κενή, επιστρέψτε την 1η Ιανουαρίου 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
