---
title: Table.FromRows
---

# Table.FromRows


Vytvorí tabuľku zo zoznamu hodnôt riadkov a voliteľných stĺpcov.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Vytvorí tabuľku zo zoznamu `rows`, kde každý prvok zoznamu je vnútorným zoznamom, ktorý obsahuje hodnoty stĺpca pre jeden riadok. Ako argument `columns` možno zadať voliteľný zoznam názvov stĺpcov, typ tabuľky alebo počet stĺpcov.


## Examples

### Example #1
Vráťte tabuľku so stĺpcom \[CustomerID\] s hodnotami \{1, 2\}, stĺpcom \[Name\] s hodnotami \{"Bob", "Jim"\} a stĺpcom \[Phone\] s hodnotami \{"123-4567", "987-6543"\}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2
Vráťte tabuľku so stĺpcom \[CustomerID\] s hodnotami \{1, 2\}, stĺpcom \[Name\] s hodnotami \{"Bob", "Jim"\} a stĺpcom \[Phone\] s hodnotami \{"123-4567", "987-6543"\}, kde \[CustomerID\] je typ čísla a \[Name\] a \[Phone\] sú typy textu.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
