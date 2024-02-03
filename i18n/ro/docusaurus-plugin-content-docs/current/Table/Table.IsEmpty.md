---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Indică dacă tabelul conține vreun rând.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Indică dacă <code>table</code> conține vreun rând. Returnează <code>true</code> dacă nu există rânduri (adică, tabelul este necompletat); în caz contrar, returnează <code>false</code>.


## Examples

### Example #1 
Determinați dacă tabelul este necompletat.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Determinaţi dacă tabelul &lt;code&gt;(\{})&lt;/code&gt; este necompletat.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
