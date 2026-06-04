---
title: List.Accumulate
---

# List.Accumulate


Συσσωρεύει μια τιμή σύνοψης από τα στοιχεία της λίστας.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Συσσωρεύει μια τιμή σύνοψης από τα στοιχεία της καθορισμένης λίστας χρησιμοποιώντας τον συσσωρευτή.

-   `list`: Η λίστα που θα επαναληφθεί.
-   `seed`: Μια αρχική συσσωρευμένη τιμή.
-   `accumulator`: Μια συνάρτηση που λαμβάνει την τρέχουσα κατάσταση και το τρέχον στοιχείο και επιστρέφει τη νέα κατάσταση.


## Examples

### Example #1
Συσσωρεύει την τιμή σύνοψης από τα στοιχεία της λίστας.
```powerquery
let
    Source = List.Accumulate(
        {1, 2, 3, 4, 5},
        0,
        (runningSum, nextNumber) => runningSum + nextNumber
    )
in
    Source
```

Result: 
```powerquery
15
```


### Example #2
Συνενώσετε κάθε λέξη στη λίστα με ένα κενό διάστημα μεταξύ τους, αλλά μην συμπεριλάβετε ένα κενό διάστημα στην αρχή.
```powerquery
let
    Source = List.Accumulate(
        {"The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."},
        null,
        (fullTextSoFar, nextPart) =>
            Text.Combine({fullTextSoFar, nextPart}, " ")
    )
in
    Source
```

Result: 
```powerquery
"The quick brown fox jumps over the lazy dog."
```


### Example #3
Δημιουργήστε μια λίστα με τις ώρες ολοκλήρωσης της διαδικασίας από μια ημερομηνία έναρξης και μια λίστα με τις ώρες εκτέλεσης της διεργασίας.
```powerquery
let
    #"Process Duration" =
    {
        #duration(0,1,0,0),
        #duration(0,2,0,0),
        #duration(0,3,0,0)
    },
    #"Start Time" = #datetime(2025, 9, 8, 19, 0, 0),
    #"Process Timeline" = List.Accumulate(
        #"Process Duration",
        {#"Start Time"},
        (accumulatedTimes, nextDuration) =>
            accumulatedTimes & {List.Last(accumulatedTimes) + nextDuration}
    )
in
    #"Process Timeline"
```

Result: 
```powerquery
{
    #datetime(2025, 9, 8, 19, 0, 0),
    #datetime(2025, 9, 8, 20, 0, 0),
    #datetime(2025, 9, 8, 22, 0, 0),
    #datetime(2025, 9, 9, 1, 0, 0)
}
```




## Category
List.Transformation functions
