---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Değerlerin ilk satırını yeni sütun başlıkları (sütun adları) olarak yükseltir.


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Değerlerin ilk satırını yeni sütun başlıkları (sütun adları) olarak yükseltir. Varsayılan olarak yalnızca metin veya sayı değerleri başlık olarak yükseltilir. Geçerli seçenekler:    <div>      <code>PromoteAllScalars</code> : <code>true</code> olarak ayarlandığı takdirde ilk satırdaki tüm skaler değerler, belirtilmişse <code>Culture</code> (veya mevcut belge yerel ayarı) kullanımıyla başlık olarak yükseltilir.    Metne dönüştürülemeyen değerler için varsayılan bir sütun adı kullanılır.    </div>    <div>    <code>Culture</code>: Veri kültürünü tanımlayan bir kültür adı.    </div>  


## Examples

### Example #1 
Tablodaki ilk değer satırını yükseltir.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Tablonun ilk satırındaki tüm skaler değerleri başlıklar olarak yükseltin.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
