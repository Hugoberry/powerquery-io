---
title: Xml.Tables
---

# Xml.Tables


Возвращает содержимое XML-документа как вложенную коллекцию преобразованных в плоскую структуру таблиц.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Возвращает содержимое XML-документа как вложенную коллекцию преобразованных в плоскую структуру таблиц.


## Examples

### Example #1 
Получение содержимого локального XML-файла.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
