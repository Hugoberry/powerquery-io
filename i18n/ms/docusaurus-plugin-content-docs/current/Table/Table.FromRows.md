---
title: Table.FromRows
---

# Table.FromRows


## Description

Mencipta jadual daripada senarai bagi nilai baris dan lajur pilihan


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Mencipta jadual daripada senarai <code>rows</code> yang setiap unsur senarai ialah senarai dalaman yang mengandungi nilai lajur untuk baris tunggal. Senarai pilihan nama lajur, jenis jadual atau bilangan lajur boleh diberikan untuk <code>columns</code>.


## Examples

### Example #1 
Mencipta jadual dengan lajur [CustomerID] dengan nilai \{1, 2} dan lajur [Name] dengan nilai \{&#34;Bob&#34;, &#34;Jim&#34;} dan lajur [Phone] dengan nilai \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Mencipta jadual dengan lajur [CustomerID] dengan nilai \{1, 2} dan lajur [Name] dengan nilai \{&#34;Bob&#34;, &#34;Jim&#34;} dan lajur [Phone] dengan nilai \{&#34;123-4567&#34;, &#34;987-6543&#34;}, yang mana [CustomerID] ialah jenis nombor manakala [Name] dan [Phone] ialah jenis teks.
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
