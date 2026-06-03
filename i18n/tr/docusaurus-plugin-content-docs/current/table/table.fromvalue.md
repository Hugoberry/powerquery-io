---
title: Table.FromValue
---

# Table.FromValue


Sağlanan değerlerden bir sütun içeren tablo oluşturur.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Remarks

Sağlanan değeri veya değerler listesini, `value` içeren bir sütuna sahip bir tablo oluşturur. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi olan `options` belirtilebilir:

-   `DefaultColumnName`: Listeden veya skaler değerinden bir tablo oluştururken kullanılan sütun adı.


## Examples

### Example #1
1 değerinden tablo oluşturur.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2
Listeden bir tablo oluşturur.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3
Özel bir sütun adıyla, değer 1'den bir tablo oluşturun.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
