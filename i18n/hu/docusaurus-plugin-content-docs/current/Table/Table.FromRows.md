---
title: Table.FromRows
---

# Table.FromRows


## Description

Egy táblát hoz létre sorértékek és opcionális oszlopok egy adott listájából


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

Egy táblát hoz létre a(z) <code>rows</code> listából, ahol a lista egyes elemei belső listák, amelyek egyetlen sor oszlopértékeit tartalmazzák. A(z) <code>columns</code> elemhez megadható egy opcionális lista az oszlopnevekkel, egy táblatípus, vagy az oszlopok száma.


## Examples

### Example #1 
Egy olyan táblát ad vissza, amelyben a [CustomerID] oszlop értékei \{1, 2}, a [Name] oszlop értékei \{&#34;Bob&#34;, &#34;Jim&#34;} és a [Phone] oszlop értékei \{&#34;123-4567&#34;, &#34;987-6543&#34;} lesznek.
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
Egy olyan táblát ad vissza, amelyben a [CustomerID] oszlop értékei \{1, 2}, a [Name] oszlop értékei \{&#34;Bob&#34;, &#34;Jim&#34;} és a [Phone] oszlop értékei \{&#34;123-4567&#34;, &#34;987-6543&#34;} lesznek, továbbá a [CustomerID] szám, a [Name] és a [Phone] pedig szöveg típusú mezők.
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
