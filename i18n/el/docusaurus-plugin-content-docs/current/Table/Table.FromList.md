---
title: Table.FromList
---

# Table.FromList


## Description

Μετατρέπει μια λίστα σε πίνακα εφαρμόζοντας την καθορισμένη συνάρτηση διαίρεσης σε κάθε στοιχείο της λίστας.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Details

Μετατρέπει μια λίστα, <code>list</code> σε πίνακα εφαρμόζοντας την προαιρετική συνάρτηση διαίρεσης, <code>splitter</code>, σε κάθε στοιχείο της λίστας. Από προεπιλογή, η λίστα θεωρείται ως λίστα τιμών κειμένου που διαιρείται από κόμματα. Η προαιρετική <code>columns</code> μπορεί να είναι ο αριθμός των στηλών, μια λίστα στηλών ή μια TableType. Μπορούν επίσης να καθοριστούν οι προαιρετικές <code>default</code> και <code>extraValues</code>.


## Examples

### Example #1 
Δημιουργήστε έναν πίνακα από μια λίστα χρησιμοποιώντας τον προεπιλεγμένο διαχωριστή.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
Δημιουργήστε έναν πίνακα από μια λίστα χρησιμοποιώντας έναν προσαρμοσμένο διαχωριστή.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
Δημιουργήστε έναν πίνακα από τη λίστα χρησιμοποιώντας τον διαχωριστή Record.FieldValues.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
