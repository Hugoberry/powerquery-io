---
title: List.Select
---

# List.Select


Επιστρέφει μια λίστα τιμών που ικανοποιούν τη συνθήκη.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

Επιστρέφει τις τιμές από την καθορισμένη λίστα που πληρούν τη συνθήκη επιλογής.

-   `list`: Η λίστα προς εξέταση.
-   `selection`: Η συνάρτηση που καθορίζει τις τιμές προς επιλογή.


## Examples

### Example #1
Βρείτε τις τιμές της λίστας \{1, -3, 4, 9, -2\} που είναι μεγαλύτερες του 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```


### Example #2
Επιλέξτε ημερομηνίες από τη λίστα που πέφτουν Σάββατο ή Κυριακή.
```powerquery
let
    dates = {
        #date(2025, 10, 20),  // Monday
        #date(2025, 10, 21),  // Tuesday
        #date(2025, 10, 25),  // Saturday
        #date(2025, 10, 26),  // Sunday
        #date(2025, 10, 27)   // Monday
    },
    weekendDates = List.Select(
        dates,
        each Date.DayOfWeek(_, Day.Monday) >= 5
    )
in
    weekendDates
```

Result: 
```powerquery
{
    #date(2025, 10, 25),
    #date(2025, 10, 26)
}
```


### Example #3
Εμφανίστε έναν πίνακα ενεργών πελατών με συνολικά ποσά αγορών άνω των 100 $.
```powerquery
let
    customers = {
        [Name = "Alice", Status = "Active", Purchases = 150],
        [Name = "Bob", Status = "Inactive", Purchases = 200],
        [Name = "Carol", Status = "Active", Purchases = 90],
        [Name = "Dave", Status = "Active", Purchases = 120]
    },
    highValueActiveCustomers = List.Select(
        customers,
        each [Status] = "Active" and [Purchases] > 100
    ),
    resultTable = Table.FromRecords(
        highValueActiveCustomers,
        type table [Name = text, Status = text, Purchases = number]
    )
in
    resultTable
```

Result: 
```powerquery
#table(type table[Name = text, Status = text, Purchases = number],
{
    {"Alice", "Active", 150},
    {"Dave", "Active", 120}
})
```




## Category
List.Selection
