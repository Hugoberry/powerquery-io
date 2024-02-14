---
title: Xml.Tables
---

# Xml.Tables


XML belgesinin içeriğini düzleştirilmiş tablolara yönelik bir iç içe yerleştirilmiş koleksiyon olarak döndürür.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

XML belgesinin içeriğini düzleştirilmiş tablolara yönelik bir iç içe yerleştirilmiş koleksiyon olarak döndürür.


## Examples

### Example #1 
Yerel xml dosyasının içeriğini alır.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
