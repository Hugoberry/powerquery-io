---
title: Table.FromRows
---

# Table.FromRows


## Description

Tiek izveidota tabula no rindu vērtību saraksta un neobligātām kolonnām.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

No saraksta <code>rows</code> tiek izveidota tabula, kurā katrs saraksta elements ir iekšējs saraksts, kurā ir ietvertas vienas rindas kolonnu vērtības. Elementam <code>columns</code> var tikt norādīts neobligāts kolonnu nosaukumu saraksts, tabulas tips vai kolonnu skaits.


## Examples

### Example #1 
Tiek izveidota tabula ar kolonnu [CustomerID] ar vērtībām \{1, 2} un kolonnu [Name] ar vērtībām \{&#34;Bob&#34;, &#34;Jim&#34;}, un kolonna [Phone] ar vērtībām \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Tiek izveidota tabula ar kolonnu [CustomerID] ar vērtībām \{1, 2} un kolonnu [Name] ar vērtībām \{&#34;Bob&#34;, &#34;Jim&#34;}, un kolonnu [Phone] ar vērtībām \{&#34;123-4567&#34;, &#34;987-6543&#34;}, kur [CustomerID] ir skaitlis, bet [Name] un [Phone] ir teksts.
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
