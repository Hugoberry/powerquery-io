---
title: Smartsheet.Tables
---

# Smartsheet.Tables


Smartsheet API からシート、レポート、フォルダー、ワークスペースのテーブルを返します


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Remarks

Smartsheet API から利用可能なシート、レポート、フォルダー、およびワークスペースの入れ子になったテーブルを返します。


## Examples

### Example #1 
Smartsheet 階層の最上位レベルで利用可能なシート、フォルダー、レポート、ワークスペースを返します
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
Smartsheet 階層の最上位レベルからのフォルダー、レポート、ワークスペースのテーブル
```



