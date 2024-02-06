---
title: Odbc.InferOptions
---

# Odbc.InferOptions


返回尝试推断 ODBC 驱动程序的 SQL 功能的结果。


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

返回尝试使用连接字符串 <code>connectionString</code> 推断 ODBC 的 SQL 功能的结果。<code>connectionString</code> 可以是文本或属性值对的记录。属性值可以是文本，也可以是数字。


## Examples

### Example #1 
返回连接字符串的推断 SQL 功能。
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
