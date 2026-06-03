---
title: Table.FromRecords
---

# Table.FromRecords


Bir kayıt listesini tabloya dönüştürür.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Belirtilen kayıt listesini bir tabloya dönüştürür.

-   `records`: Tabloya dönüştürülecek kayıtların listesi.
-   `columns`: (İsteğe bağlı) Tablonun sütun adlarının listesi veya tablonun türü.
-   `missingField`: (İsteğe bağlı) Bir satırdaki eksik alanların nasıl işleneceğini belirtir. Aşağıdaki değerlerden birini kullanın:
    -   `MissingField.Error`: Eksik alanlar hata oluşturur (varsayılan).
    -   `MissingField.UseNull`: Eksik alanlar `null` değerleri olarak eklenir.
      
    Bu parametrede `MissingField.Ignore` kullanılması bir hata oluşturur.


## Examples

### Example #1
Kayıt alan adlarını sütun adları olarak kullanarak bir kayıt tablosu oluşturun.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Yazılı sütunlardan oluşan bir kayıt tablosu oluşturun ve sütun sayısını seçin.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Belirtilen kayıtlardaki müşterilerin adı, ikinci adının baş harfi ve soyadını içeren bir tablo oluşturun. Değerlerden herhangi biri eksikse, değeri `null` ile değiştirin.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
