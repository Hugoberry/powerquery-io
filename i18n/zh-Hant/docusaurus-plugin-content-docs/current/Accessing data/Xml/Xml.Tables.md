---
title: Xml.Tables
---

# Xml.Tables


將 XML 文件的內容傳回成壓平合併資料表的巢狀集合。


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

將 XML 文件的內容傳回成壓平合併資料表的巢狀集合。


## Examples

### Example #1 
擷取本機 XML 檔案的內容。
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
