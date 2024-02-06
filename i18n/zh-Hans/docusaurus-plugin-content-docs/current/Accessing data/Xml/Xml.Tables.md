---
title: Xml.Tables
---

# Xml.Tables


返回 XML 文档的内容作为平展表的嵌套集合。


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

返回 XML 文档的内容作为平展表的嵌套集合。


## Examples

### Example #1 
检索本地 xml 文件的内容。
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
