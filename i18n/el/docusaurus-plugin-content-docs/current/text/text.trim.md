---
title: Text.Trim
---

# Text.Trim


Καταργεί όλους τους καθορισμένους αρχικούς και τελικούς χαρακτήρες.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της κατάργησης όλων των αρχικών και τελικών χαρακτήρων από την καθορισμένη `text`. Από προεπιλογή, καταργούνται όλοι οι αρχικοί και οι τελικοί χαρακτήρες του κενού διαστήματος.

-   `text`: Το κείμενο από το οποίο πρέπει να καταργηθούν οι αρχικοί και οι τελικοί χαρακτήρες.
-   `trim`: Παρακάμπτει τους χαρακτήρες κενού διαστήματος που έχουν περικοπεί από προεπιλογή. Αυτή η παράμετρος μπορεί να είναι ένας χαρακτήρας ή μια λίστα με μεμονωμένους χαρακτήρες. Κάθε αρχική και τελική λειτουργία αποκοπής σταματάει όταν παρουσιάζεται ένας χαρακτήρας χωρίς περικοπή.


## Examples

### Example #1
Καταργεί όλα τα αρχικά και τελικά κενά διαστήματα από το " a b c d ".
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
Καταργήστε τα αρχικά και τελικά μηδενικά από την αναπαράσταση κειμένου ενός αριθμού.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
Καταργήστε την αρχική και την τελική αγκύλη από μια ετικέτα HTML.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
Καταργήστε τους ειδικούς χαρακτήρες που χρησιμοποιούνται γύρω από την κατάσταση εκκρεμών πωλήσεων.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
