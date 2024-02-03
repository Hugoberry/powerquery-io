---
title: Xml.Tables
---

# Xml.Tables


## Description

フラット化されたテーブルの入れ子のコレクションとして XML ドキュメントのコンテンツを返します。


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

フラット化されたテーブルの入れ子のコレクションとして XML ドキュメントのコンテンツを返します。


## Examples

### Example #1 
ローカル xml ファイルの内容を取得します。
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
