---
title: Table.ReplaceValue
---

# Table.ReplaceValue


Αντικαθιστά μία τιμή στις καθορισμένες στήλες με μία άλλη.


## Syntax

```powerquery
Table.ReplaceValue(
    table as table,
    oldValue as any,
    newValue as any,
    replacer as function,
    columnsToSearch as list
) as table
```


## Remarks

Αντικαθιστά μια τιμή με μια νέα τιμή στις καθορισμένες στήλες ενός πίνακα.

-   `table`: Ο πίνακας προς αναζήτηση.
-   `oldValue`: Η τιμή που θα αντικατασταθεί.
-   `newValue`: Η τιμή αντικατάστασης.
-   `replacer`: Η συνάρτηση αντικατάστασης που θα χρησιμοποιηθεί. Η συνάρτηση μπορεί να είναι είτε `Replacer.ReplaceText` για να αντικαταστήσει το αρχικό κείμενο με νέο κείμενο, `Replacer.ReplaceValue` για να αντικαταστήσει την αρχική τιμή με μια νέα τιμή, είτε μια προσαρμοσμένη συνάρτηση αντικατάστασης.
-   `columnsToSearch`: Μια λίστα που περιέχει τη συγκεκριμένη στήλη ή στήλες στον πίνακα για να αναζητήσετε την τιμή προς αντικατάσταση.


## Examples

### Example #1
Αντικαταστήστε το κείμενο "goodbye" με "world" στη στήλη B, αντιστοιχίζοντας μόνο ολόκληρη την τιμή.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "goodbye"],
        [A = 3, B = "goodbyes"]
    }),
    "goodbye",
    "world",
    Replacer.ReplaceValue,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"],
    [A = 3, B = "goodbyes"]
})
```


### Example #2
Αντικαταστήστε το κείμενο "ur" με "or" στη στήλη B, αντιστοιχίζοντας οποιοδήποτε τμήμα της τιμής.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [A = 1, B = "hello"],
        [A = 2, B = "wurld"]
    }),
    "ur",
    "or",
    Replacer.ReplaceText,
    {"B"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 2, B = "world"]
})
```


### Example #3
Ανωνυμοποίηση των ονομάτων των υπαλλήλων των Η.Π.Α.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each if [Country] = "US" then [Name] else false,
    each Text.Repeat("*", Text.Length([Name])),
    Replacer.ReplaceValue,
    {"Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "*****", Country = "US"],
    [Name = "Bob", Country = "CA"]
})
```


### Example #4
Ανωνυμοποίηση όλων των στηλών των υπαλλήλων των Η.Π.Α.
```powerquery
Table.ReplaceValue(
    Table.FromRecords({
        [Name = "Cindy", Country = "US"],
        [Name = "Bob", Country = "CA"]
    }),
    each [Country] = "US",
    "?",
    (currentValue, isUS, replacementValue) =>
        if isUS then
            Text.Repeat(replacementValue, Text.Length(currentValue))
        else
            currentValue,
    {"Name", "Country"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "?????", Country = "??"],
    [Name = "Bob", Country = "CA"]
})
```




## Category
Table.Transformation
