---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

ODBC ドライバーの SQL 機能の推測を試みた結果を返します。


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

ODBC を使用して、接続文字列 <code>connectionString</code> で SQL 機能の推測を試した結果を返します。<code>connectionString</code> には、テキスト、またはプロパティ値のペアのレコードを使用できます。プロパティ値には、テキストまたは数字を使用できます。


## Examples

### Example #1 
接続文字列から推測される SQL 機能を返します。
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
