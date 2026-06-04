---
title: Text.TrimEnd
---

# Text.TrimEnd


Καταργεί όλους τους καθορισμένους τελικούς χαρακτήρες.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Επιστρέφει το αποτέλεσμα της κατάργησης όλων των τελευταίων χαρακτήρων από την καθορισμένη `text`. Από προεπιλογή, καταργούνται όλοι οι χαρακτήρες κενού διαστήματος που ακολουθούν.

-   `text`: Το κείμενο από το οποίο πρέπει να καταργηθούν οι τελικοί χαρακτήρες.
-   `trim`: Παρακάμπτει τους χαρακτήρες κενού διαστήματος που έχουν περικοπεί από προεπιλογή. Αυτή η παράμετρος μπορεί να είναι ένας χαρακτήρας ή μια λίστα με μεμονωμένους χαρακτήρες. Κάθε τελική λειτουργία αποκοπής σταματάει όταν παρουσιάζεται ένας χαρακτήρας χωρίς περικοπή.


## Examples

### Example #1
Καταργήστε όλα τα τελικά κενά διαστήματα από το " a b c d ".
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```


### Example #2
Καταργήστε τα τελικά μηδενικά από μια αναπαράσταση κειμένου ενός παραγεμισμένου αιωρούμενου αριθμού κατάδειξης.
```powerquery
Text.TrimEnd("03.487700000", "0")
```

Result: 
```powerquery
"03.4877"
```


### Example #3
Καταργήστε τους τελικούς χαρακτήρες αναπλήρωσης από ένα όνομα λογαριασμού σταθερού πλάτους.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "US-847263****@", 2.8410},
        {"Leslie", "FR-4648****@**", 3.8392},
        {"Ringo", "DE-2046790@***", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimEnd(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "US-847263", 2.841},
    {"Leslie", "FR-4648", 3.8392},
    {"Ringo", "DE-2046790", 12.66}
})
```




## Category
Text.Transformations
