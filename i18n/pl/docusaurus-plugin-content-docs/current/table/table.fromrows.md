---
title: Table.FromRows
---

# Table.FromRows


Tworzy tabelę na podstawie listy wartości wiersza i kolumn opcjonalnych.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Tworzy tabelę na podstawie listy `rows`, której każdy element jest listą wewnętrzną zawierającą wartości kolumn dla jednego wiersza. Dla elementu `columns` można określić opcjonalną listę nazw kolumn, typ tabeli lub liczbę kolumn.


## Examples

### Example #1
Zwraca tabelę z kolumną \[CustomerID\], która zawiera wartości \{1, 2\}, kolumną \[Name\], która zawiera wartości \{"Bob", "Jim"\}, i kolumną \[Phone\] zawierającą wartości \{"123-4567", "987-6543"\}.
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
Zwraca tabelę z kolumną \[CustomerID\], która zawiera wartości \{1, 2\}, kolumną \[Name\], która zawiera wartości \{"Bob", "Jim"\}, i kolumną \[Phone\] zawierającą wartości \{"123-4567", "987-6543"\}, gdzie kolumna \[CustomerID\] zawierają dane typu liczbowego, a kolumny \[Name\] i \[Phone\] zawierają wartości typu tekstowego.
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
