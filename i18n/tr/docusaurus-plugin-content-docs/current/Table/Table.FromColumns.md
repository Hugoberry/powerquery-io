---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Bir sütun listesinden ve belirtilen değerlerden tablo oluşturur.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

<code>lists</code> listesinden <code>columns</code> türünde, sütun adlarını ve değerlerini içeren iç içe yerleştirilmiş listeleri bulunduran bir tablo oluşturur.    Bazı sütunlarda diğerlerinden daha fazla değer varsa, eksik değerler sütunlar null atanabilir ise varsayılan değer olan 'null' ile doldurulur.


## Examples

### Example #1 
Listede yer alan bir müşteri adları listesinden bir tablo döndürür. Müşteri listesi öğesindeki her bir değer satır değeri olurken her bir liste sütun olur.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Verilen sütun listesinden ve sütun adları listesinden tablo oluşturur.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Satır başına farklı sütun sayıları olan bir tablo oluşturur. Eksik satır değeri null&#39;dur.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
