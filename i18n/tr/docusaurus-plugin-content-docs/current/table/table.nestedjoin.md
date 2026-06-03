---
title: Table.NestedJoin
---

# Table.NestedJoin


Tablolar arasında sağlanan sütunlar üzerinde birleştirme gerçekleştirir ve birleştirme sonucunu yeni bir sütunda oluşturur.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

`key1` (`table1` için) ve `key2` (`table2` için) tarafından seçilen anahtar sütunu değerlerinin eşitliğine göre `table1` satırlarını `table2` satırlarıyla birleştirir. Sonuçlar `newColumnName` adlı sütuna girilir.

İsteğe bağlı `joinKind`, gerçekleştirilecek birleşimin türünü belirtir. `joinKind` belirtilmezse varsayılan olarak sol dış birleştirme işlemi gerçekleştirilir.

Anahtar sütunlarının nasıl karşılaştırılacağını belirtmek üzere isteğe bağlı bir `keyEqualityComparers` kümesi eklenebilir. Bu özellik, şu anda yalnızca şirket içinde kullanılabilir.


## Examples

### Example #1
Tek bir anahtar sütunu kullanarak iki tabloyu birleştirin.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
