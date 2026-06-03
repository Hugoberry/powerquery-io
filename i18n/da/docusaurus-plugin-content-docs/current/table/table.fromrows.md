---
title: Table.FromRows
---

# Table.FromRows


Opretter en tabel ud fra en liste over rækkeværdier og valgfrie kolonner.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Opretter en tabel ud fra listen `rows`, hvor de enkelte elementer på listen er en indre liste, der indeholder kolonneværdier for en enkelt række. Der kan angives en valgfri liste over kolonnenavne, en tabeltype eller et antal kolonner for `columns`.


## Examples

### Example #1
Returnerer en tabel med kolonnen \[CustomerID\] med værdierne \{1, 2\}, kolonnen \[Name\] med værdierne \{"Bob", "Jim"\} og kolonnen \[Phone\] med værdierne \{"123-4567", "987-6543"\}.
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
Returnerer en tabel med kolonnen \[CustomerID\] med værdierne \{1, 2\}, kolonnen \[Name\] med værdierne \{"Bob", "Jim"\} og kolonnen \[Phone\] med værdierne \{"123-4567", "987-6543"\}, hvor \[CustomerID\] er nummertype, og \[Name\] og \[Phone\] er teksttyper.
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
