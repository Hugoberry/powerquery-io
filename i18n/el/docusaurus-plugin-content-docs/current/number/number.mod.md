---
title: Number.Mod
---

# Number.Mod


Ακέραιος που διαιρεί δύο αριθμούς και επιστρέφει το υπόλοιπο.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Επιστρέφει το υπόλοιπο που προκύπτει από την ακέραια διαίρεση του `number` από το `divisor`. Εάν οι τιμές `number` ή `divisor` είναι `null`, αυτή η συνάρτηση επιστρέφει `null`.

-   `number`: Ο διαιρετέος.
-   `divisor`: Ο διαιρέτης.
-   `precision`: (Προαιρετικό) Η ακρίβεια της διαίρεσης ακέραιου. Αυτή η παράμετρος μπορεί να είναι είτε `Precision.Double` για `Διπλή` precision ή `Precision.Decimal` για `Δεκαδική` ακρίβεια. Η προεπιλεγμένη τιμή είναι `Precision.Double`.


## Examples

### Example #1
Βρείτε το υπόλοιπο της διαίρεσης 5 διά 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Βρείτε το υπόλοιπο όταν διαιρέσετε το 10,5 με το 0,2, χρησιμοποιώντας τόσο `Διπλή` όσο και `Δεκαδική` ακρίβεια.
```powerquery
let
    Dividend = 10.5,
    Divisor = 0.2,

    #"Use Double Precision" = Number.Mod(Dividend, Divisor, Precision.Double),
    #"Use Decimal Precision" = Number.Mod(Dividend, Divisor, Precision.Decimal),

    // Convert to text to inspect precision
    #"Double To Text" = Number.ToText(#"Use Double Precision", "G"),
    #"Decimal To Text" = Number.ToText(#"Use Decimal Precision", "G"),

    #"Display Result" = [
        DoublePrecision = #"Double To Text",
        DecimalPrecision = #"Decimal To Text"
    ]
in
    #"Display Result"
```

Result: 
```powerquery
[
    DoublePrecision = "0.0999999999999994",
    DecimalPrecision = "0.1"
]
```




## Category
Number.Operations
