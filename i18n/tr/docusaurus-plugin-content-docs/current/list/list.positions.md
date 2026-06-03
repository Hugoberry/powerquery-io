---
title: List.Positions
---

# List.Positions


Girdi için uzaklık listesi döndürür.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Belirtilen girdi listesi için ofsetlerin bir listesini döndürür.

-   `list`: Giriş listesi.

`List.Transform` kullanarak bir listeyi değiştirmek için, konum listesi, dönüşüme konuma erişim sağlamak için kullanılabilir.


## Examples

### Example #1
\{1, 2, 3, 4, null, 5\} listesindeki değerlerin uzaklıklarını bulur.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```


### Example #2
Müşterinin listede bulunduğu konuma göre her müşteriye bir kimlik numarası atayan bir tablo oluşturun.
```powerquery
let
    customers = {"Alice", "Bob", "Charlie", "Diana"},
    resultTable =
        Table.FromRecords(
            List.Transform(
                List.Positions(customers),
                each [
                    IDNumber = _ + 1,   // Make it 1-based
                    CustomerName = customers{_}
                ]
            ),
            type table [IDNumber = Int64.Type, CustomerName = text]
        )
in
    resultTable
```

Result: 
```powerquery
#table (type table[IDNumber = Int64.Type, CustomerName = text],
{
    {1, "Alice"},
    {2, "Bob"},
    {3, "Charlie"},
    {4, "Diana"}
})
```




## Category
List.Selection
