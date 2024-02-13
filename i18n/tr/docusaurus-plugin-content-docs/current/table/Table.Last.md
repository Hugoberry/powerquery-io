---
title: Table.Last
---

# Table.Last


Son satırı veya belirtilen varsayılan değeri döndürür.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Remarks

<code>table</code> öğesinin son satırını veya tablo boşsa <code>default</code> isteğe bağlı varsayılan değerini döndürür.


## Examples

### Example #1 
Tablonun son satırını bulur.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
&lt;code&gt;(\{})&lt;/code&gt; tablosunun son satırını bulur veya boşsa [a = 0, b = 0] döndürür.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
