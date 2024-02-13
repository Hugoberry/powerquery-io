---
title: Table.SelectColumns
---

# Table.SelectColumns


Yalnızca belirtilen sütunları içeren bir tablo döndürür.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Yalnızca belirtilen <code>columns</code> öğesini içeren <code>table</code> öğesini döndürür.    <ul>       <li><code>table</code>: Sağlanan tablo.</li>       <li><code>columns</code>: <code>table</code> tablosundan döndürülecek sütun listesi. Döndürülen tablodaki sütunlar <code>columns</code> içinde listelenen sıradadır.</li>       <li><code>missingField</code>: <i>(İsteğe bağlı)</i> Sütun yoksa yapılacak işlem.  Örneğin: <code>MissingField.UseNull</code> veya <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Yalnızca [Name] sütununu ekleyin.
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
Yalnızca [CustomerID] ve [Name] sütunlarını ekleyin.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
Eklenen sütun mevcut değilse, varsayılan sonuç hatadır.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
Eklenen sütun mevcut değilse, &lt;code&gt;MissingField.UseNull&lt;/code&gt; seçeneği null değerlerden oluşan bir sütun oluşturur.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
