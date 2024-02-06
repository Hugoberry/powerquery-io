---
title: Odbc.InferOptions
---

# Odbc.InferOptions


傳回嘗試推斷 ODBC 驅動程式 SQL 功能的結果。


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

傳回利用使用 ODBC 之連接字串 <code>connectionString</code> 嘗試推斷 SQL 功能的結果。<code>connectionString</code> 可以是文字或屬性值組的記錄。屬性值可以是文字或數字。


## Examples

### Example #1 
傳回連接字串的推斷 SQL 功能。
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
