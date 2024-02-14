---
title: Table.First
---

# Table.First


İlk satırı veya belirtilen varsayılan değeri döndürür.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

<code>table</code> öğesinin ilk satırını veya tablo boşsa <code>default</code> isteğe bağlı varsayılan değerini döndürür.


## Examples

### Example #1 
Tablonun ilk satırını bulur.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
&lt;code&gt;(\{})&lt;/code&gt; tablosunun ilk satırını bulur veya boşsa [a = 0, b = 0] döndürür.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
