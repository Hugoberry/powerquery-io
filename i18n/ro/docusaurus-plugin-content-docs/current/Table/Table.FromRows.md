---
title: Table.FromRows
---

# Table.FromRows


## Description

Creează un tabel dintr-o listă de valori pentru rând și coloane opționale


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Creează un tabel din lista <code>rows</code>, în care fiecare element din listă este o listă interioară, care conține valorile de coloane pentru un singur rând. O listă opțională de nume de coloane, un tip de tabel sau un număr de coloane pot fi furnizate pentru <code>columns</code>.


## Examples

### Example #1 
Returnează un tabel cu coloana [IDClient] cu valorile \{1, 2}, coloana [Nume] cu valorile \{&#34;Bob&#34;, &#34;Jim&#34;} și coloana [Telefon] cu valorile \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Returnează un tabel cu coloana [IDClient] cu valorile \{1, 2}, coloana [Nume] cu valorile \{&#34;Bob&#34;, &#34;Jim&#34;} și coloana [Telefon] cu valorile \{&#34;123-4567&#34;, &#34;987-6543&#34;}, unde [IDClient] este tipul de număr și [Nume] și [Telefon] sunt tipuri de text.
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
