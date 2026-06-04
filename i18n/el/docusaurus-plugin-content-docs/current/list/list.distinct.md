---
title: List.Distinct
---

# List.Distinct


Επιστρέφει μια λίστα τιμών από την οποία έχουν αφαιρεθεί οι διπλότυπες τιμές.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Επιστρέφει μια λίστα που περιέχει όλες τις τιμές της καθορισμένης λίστας με τα διπλότυπα να καταργούνται. Αν η καθορισμένη λίστα είναι κενή, το αποτέλεσμα είναι μια κενή λίστα.

-   `list`: Η λίστα από την οποία εξάγονται διακριτές τιμές.
-   `equationCriteria`: (Προαιρετικό) Καθορίζει τον τρόπο με τον οποίο προσδιορίζεται η ισότητα κατά τη σύγκριση τιμών. Αυτή η παράμετρος μπορεί να είναι μια συνάρτηση επιλογέα κλειδιού, μια συνάρτηση σύγκρισης ή μια λίστα που περιέχει έναν επιλογέα κλειδιού και μια σύγκριση.


## Examples

### Example #1
Καταργήστε τις διπλότυπες τιμές από τη λίστα \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Ξεκινώντας από το τέλος της λίστας, επιλέξτε τα φρούτα που έχουν μοναδικό μήκος κειμένου.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
Ξεκινώντας από την αρχή της λίστας, επιλέξτε τα μοναδικά φρούτα ενώ παραβλέπετε την περίπτωση.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Εξαγάγετε από μια λίστα λιστών τις πρώτες λίστες με μοναδικά ονόματα χωρών ενώ παραβλέπετε την περίπτωση. Τοποθετήστε τις λίστες που έχουν εξαχθεί στις σειρές ενός νέου πίνακα.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
