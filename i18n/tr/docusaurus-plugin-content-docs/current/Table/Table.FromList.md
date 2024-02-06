---
title: Table.FromList
---

# Table.FromList


Bir listeyi belirtilen ayırma işlevini listedeki her öğeye uygulayarak bir tabloya dönüştürür.


## Syntax

```powerquery
Table.FromList(
    list as list,
    optional splitter as function,
    optional columns as any,
    optional default as any,
    optional extraValues as ExtraValues.Type
) as table
```


## Remarks

<code>list</code> listesini <code>splitter</code> isteğe bağlı ayırma işlevini listedeki her öğeye uygulayarak bir tabloya dönüştürür. Varsayılan olarak, listenin virgülle ayrılmış metin değerleri listesi olduğu varsayılır. İsteğe bağlı <code>columns</code> sütun sayısı, sütun listesi veya bir TableType olabilir. İsteğe bağlı <code>default</code> ve <code>extraValues</code> belirtilebilir.


## Examples

### Example #1 
Varsayılan ayırıcıyı kullanarak listeden bir tablo oluşturun.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    null,
    {"Letter", "Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Letter = "a", #"Example Word" = "apple"],
    [Letter = "b", #"Example Word" = "ball"],
    [Letter = "c", #"Example Word" = "cookie"],
    [Letter = "d", #"Example Word" = "door"]
})
```


### Example #2 
Özel bir ayırıcı kullanarak listeden bir tablo oluşturun.
```powerquery
Table.FromList(
    {"a,apple", "b,ball", "c,cookie", "d,door"},
    Splitter.SplitByNothing(),
    {"Letter and Example Word"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [#"Letter and Example Word" = "a,apple"],
    [#"Letter and Example Word" = "b,ball"],
    [#"Letter and Example Word" = "c,cookie"],
    [#"Letter and Example Word" = "d,door"]
})
```


### Example #3 
Record.FieldValues ayırıcısını kullanarak listeden bir tablo oluşturun.
```powerquery
Table.FromList(
    {
        [CustomerID = 1, Name = "Bob"],
        [CustomerID = 2, Name = "Jim"]
    },
    Record.FieldValues,
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob"],
    [CustomerID = 2, Name = "Jim"]
})
```




## Category
Table.Table construction
