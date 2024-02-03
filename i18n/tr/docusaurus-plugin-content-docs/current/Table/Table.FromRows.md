---
title: Table.FromRows
---

# Table.FromRows


## Description

Satır değerlerinin ve isteğe bağlı sütunların bulunduğu listeden bir tablo oluşturur


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Details

<code>rows</code> listesinden listenin her öğesinin tek bir satır için sütun değerlerini içerdiği bir tablo oluşturur. <code>columns</code> için sütun adlarının isteğe bağlı bir listesi, tablo türü veya sütun sayısı sağlanabilir.


## Examples

### Example #1 
[CustomerID] sütunu \{1, 2} değerlerine, [Name] sütunu \{&#34;Bob&#34;, &#34;Jim&#34;} değerlerine ve [Phone] sütunu \{&#34;123-4567&#34;, &#34;987-6543&#34;} değerlerine sahip olacak şekilde bir tablo döndürür.
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
[CustomerID] bir sayı türü, [Name] ve [Phone] ise metin türleri olmak üzere; [CustomerID] sütunu \{1, 2} değerlerine, [Name] sütunu \{&#34;Bob&#34;, &#34;Jim&#34;} değerlerine ve [Phone] sütunu \{&#34;123-4567&#34;, &#34;987-6543&#34;} değerlerine sahip olacak şekilde bir tablo döndürür.
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
