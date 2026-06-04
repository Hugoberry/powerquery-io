---
title: Table.SplitColumn
---

# Table.SplitColumn


Διαιρεί την καθορισμένη στήλη σε ένα σύνολο πρόσθετων στηλών χρησιμοποιώντας την καθορισμένη συνάρτηση διαχωριστικού.


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Remarks

Splits the specified column into a set of additional columns using the specified splitter function.

-   `table`: The table containing the column to split.
-   `sourceColumn`: The name of the column to split.
-   `splitter`: The splitter function used to split the column (for example, `Splitter.SplitTextByDelimiter` or `Splitter.SplitTextByPosition`).
-   `columnNamesOrNumber`: Either a list of new column names to create, or the number of new columns.
-   `default`: Overrides the value used when there aren't enough split values to fill all of the new columns. The default for this parameter is `null`.
-   `extraColumns`: Specifies what to do if there might be more split values than the number of new columns. You can pass an `ExtraValues.Type` enumeration value to this parameter. The default is `ExtraValues.Ignore`.


## Examples

### Example #1
Διαιρέστε τη στήλη ονόματος σε όνομα και επώνυμο.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "))
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, Name.1 = text, Name.2 = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #2
Διαιρέστε τη στήλη ονόματος σε όνομα και επώνυμο και, στη συνέχεια, μετονομάστε τις νέες στήλες.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"})
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", null, "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #3
Διαιρέστε τη στήλη ονόματος σε όνομα και επώνυμο, μετονομάστε τις νέες στήλες και συμπληρώστε τυχόν κενά με "-Χωρίς καταχώρηση-".
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul", "543-7890"},
        {4, "Cristina Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        "-No Entry-")
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", "White", "123-4567"},
    {2, "Jim", "Smith", "987-6543"},
    {3, "Paul", "-No Entry-", "543-7890"},
    {4, "Cristina", "Best", "232-1550"}
})
```


### Example #4
Διαιρέστε τη στήλη ονόματος σε όνομα και επώνυμο και, στη συνέχεια, μετονομάστε τις νέες στήλες. Επειδή μπορεί να υπάρχουν περισσότερες τιμές από τον αριθμό των διαθέσιμων στηλών, μετατρέψτε τη στήλη επώνυμου σε μια λίστα που περιλαμβάνει όλες τις τιμές μετά το όνομα.
```powerquery
let
    Source = #table(type table[CustomerID = number, Name = text, Phone = text],
    {
        {1, "Bob White", "123-4567"},
        {2, "Jim Smith", "987-6543"},
        {3, "Paul Green", "543-7890"},
        {4, "Cristina J. Best", "232-1550"}
    }),
    SplitColumns = Table.SplitColumn(
        Source,
        "Name",
        Splitter.SplitTextByDelimiter(" "),
        {"First Name", "Last Name"},
        null,
        ExtraValues.List)
in
    SplitColumns
```

Result: 
```powerquery
#table(type table[CustomerID = number, First Name = text, Last Name = text, Phone = text],
{
    {1, "Bob", {"White"}, "123-4567"},
    {2, "Jim", {"Smith"}, "987-6543"},
    {3, "Paul", {"Green"}, "543-7890"},
    {4, "Cristina", {"J.", "Best"}, "232-1550"}
})
```




## Category
Table.Transformation
