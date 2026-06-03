---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Belirtilen sütunlardaki hata değerlerini ilgili belirtilen değerle değiştirir.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Belirtilen `table` sütunlarındaki hata değerlerini `errorReplacement` listesindeki yeni değerlerle değiştirir. Listenin biçimi \{\{column1, value1\}, ...\}. Sütun başına yalnızca bir değiştirme değeri bulunabilir, sütunun birden fazla kez belirtilmesi hataya neden olur.


## Examples

### Example #1
Tabloda bulunan hata değerini "world" metni ile değiştirir.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Tabloda, A sütunundaki hata değerini "hello" metni ile B sütunundaki hata değerini ise "world" metni ile değiştirir.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
