---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Bir ODBC sürücüsü için SQL yeteneklerini çıkarsama denemesinin sonucunu döndürür.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

<code>connectionString</code> dizesiyle ODBC kullanarak SQL yeteneklerini çıkarsama denemesinin sonucunu döndürür. <code>connectionString</code> metin veya özellik değeri çiftlerinin kaydı olabilir. Özellik değerleri metin veya sayı olabilir.


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
