---
title: Text.TrimStart
---

# Text.TrimStart


Καταργεί όλους τους καθορισμένους αρχικούς χαρακτήρες.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της κατάργησης όλων των αρχικών χαρακτήρων από την καθορισμένη `text`. Από προεπιλογή, καταργούνται όλοι οι αρχικοί χαρακτήρες του κενού διαστήματος.

-   `text`: Το κείμενο από το οποίο θα καταργηθούν οι αρχικοί χαρακτήρες.
-   `trim`: Παρακάμπτει τους χαρακτήρες κενού διαστήματος που έχουν περικοπεί από προεπιλογή. Αυτή η παράμετρος μπορεί να είναι ένας χαρακτήρας ή μια λίστα με μεμονωμένους χαρακτήρες. Κάθε αρχική λειτουργία περικοπής σταματάει όταν παρουσιάζεται ένας χαρακτήρας χωρίς περικοπή.


## Examples

### Example #1
Καταργήστε όλα τα αρχικά κενά διαστήματα από το " a b c d ".
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
Καταργήστε τα αρχικά μηδενικά από την αναπαράσταση κειμένου ενός αριθμού.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
Καταργήστε τους αρχικούς χαρακτήρες αναπλήρωσης από ένα όνομα λογαριασμού σταθερού πλάτους.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
