---
title: Table.FromRows
---

# Table.FromRows


## Description

Vytvorí tabuľku zo zoznamu hodnôt riadka a voliteľných stĺpcov


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Vytvorí tabuľku zo zoznamu <code>rows</code>, kde každý prvok zoznamu je vnútorným zoznamom, ktorý obsahuje hodnoty stĺpca pre jeden riadok. Ako argument  <code>columns</code> možno zadať voliteľný zoznam názvov stĺpcov, typ tabuľky alebo počet stĺpcov.


## Examples

### Example #1 
Vráťte tabuľku so stĺpcom [CustomerID] s hodnotami \{1, 2}, stĺpcom [Name] s hodnotami \{&#34;Bob&#34;, &#34;Jim&#34;} a stĺpcom [Phone] s hodnotami \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
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
Vráťte tabuľku so stĺpcom [CustomerID] s hodnotami \{1, 2}, stĺpcom [Name] s hodnotami \{&#34;Bob&#34;, &#34;Jim&#34;} a stĺpcom [Phone] s hodnotami \{&#34;123-4567&#34;, &#34;987-6543&#34;}, kde [CustomerID] je typ čísla a [Name] a [Phone] sú typy textu.
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
