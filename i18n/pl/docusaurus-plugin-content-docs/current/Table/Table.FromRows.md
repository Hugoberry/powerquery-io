---
title: Table.FromRows
---

# Table.FromRows


## Description

Tworzy tabelę na podstawie listy wartości wiersza i kolumn opcjonalnych


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Tworzy tabelę na podstawie listy <code>rows</code>, której każdy element jest listą wewnętrzną zawierającą wartości kolumn dla jednego wiersza. Dla elementu <code>columns</code> można określić opcjonalną listę nazw kolumn, typ tabeli lub liczbę kolumn.


## Examples

### Example #1 
Zwraca tabelę z kolumną [CustomerID], która zawiera wartości \{1, 2}, kolumną [Name], która zawiera wartości \{&#34;Bob&#34;, &#34;Jim&#34;}, i kolumną [Phone] zawierającą wartości \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Zwraca tabelę z kolumną [CustomerID], która zawiera wartości \{1, 2}, kolumną [Name], która zawiera wartości \{&#34;Bob&#34;, &#34;Jim&#34;}, i kolumną [Phone] zawierającą wartości \{&#34;123-4567&#34;, &#34;987-6543&#34;}, gdzie kolumna [CustomerID] zawierają dane typu liczbowego, a kolumny [Name] i [Phone] zawierają wartości typu tekstowego.
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
