---
title: Table.IsEmpty
---

# Table.IsEmpty


Tabloda herhangi bir satır bulunup bulunmadığını gösterir.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

<code>table</code> içinde herhangi bir satır bulunup bulunmadığını gösterir. Hiç satır olmaması halinde (örneğin, tablo boşsa) <code>true</code> döndürür, satır varsa <code>false</code> döndürür.


## Examples

### Example #1 
Tablonun boş olup olmadığını belirler.
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
&lt;code&gt;(\{})&lt;/code&gt; tablosunun boş olup olmadığını belirler.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
