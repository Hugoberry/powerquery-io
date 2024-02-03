---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Ilmaisee, sisältääkö taulukko rivejä.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Ilmaisee, sisältääkö <code>table</code> rivejä. Palauttaa arvon <code>true</code>, jos rivejä ei ole (eli taulukko on tyhjä), ja muussa tapauksessa arvon <code>false</code>.


## Examples

### Example #1 
Selvitä, onko taulukko tyhjä.
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
Selvitä, onko taulukko &lt;code&gt;(\{})&lt;/code&gt; tyhjä.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
