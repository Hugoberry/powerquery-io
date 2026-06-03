---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Bir ODBC sürücüsü için SQL yeteneklerini çıkarsama denemesinin sonucunu döndürür.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

`connectionString` dizesiyle ODBC kullanarak SQL yeteneklerini çıkarsama denemesinin sonucunu döndürür. `connectionString` metin veya özellik değeri çiftlerinin kaydı olabilir. Özellik değerleri metin veya sayı olabilir.


## Examples

### Example #1
Bağlantı dizesi için çıkarsanan SQL özelliklerini döndürün.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
