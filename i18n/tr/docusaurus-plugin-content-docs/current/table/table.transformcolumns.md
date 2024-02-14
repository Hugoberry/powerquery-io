---
title: Table.TransformColumns
---

# Table.TransformColumns


Bir veya daha fazla sütunun değerlerini dönüştürür.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Remarks

<code>table</code> (Biçim \{ column name, transformation } veya \{ column name, transformation, new column type } olacak şekilde) <code>transformOperations</code> üzerinde listelenen her sütun işlemini uygulayarak bu işlemi dönüştürür. Bir <code>defaultTransformation</code> belirtilirse, <code>transformOperations</code> üzerinde listelenmeyen tüm sütunlara uygulanır. <code>transformOperations</code> üzerinde listelenen bir sütun yoksa, isteğe bağlı <code>missingField</code> parametresi bir alternatif belirtmediği sürece özel durum oluşur (örneğin, <code>MissingField.UseNull</code> veya <code>MissingField.Ignore</code>).


## Examples

### Example #1 
[A] sütunundaki metin değerlerini sayı değerlerine, [B] sütunundaki sayı değerlerini de metin değerlerine dönüştürün.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Eksik [X] sütunundaki sayı değerlerini, mevcut olmayan sütunları yok sayarak metin değerlerine dönüştürün.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Eksik [X] sütunundaki sayı değerlerini, mevcut olmayan sütunlarda varsayılan olarak null şeklinde ayarlayarak metin değerlerine dönüştürün.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
[B] sütundaki sayı değerlerini artırın ve bunları metin değerlerine dönüştürün, diğer tüm sütunları da sayıya dönüştürün.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
