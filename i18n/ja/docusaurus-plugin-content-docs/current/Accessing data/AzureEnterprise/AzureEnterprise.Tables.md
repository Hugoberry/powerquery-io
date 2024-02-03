---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

加入契約に関連付けられた Azure エンタープライズ REST API エンドポイントの URL を入力します


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Azure エンタープライズ API で使用可能なレポートと月の一覧を返します


## Examples

### Example #1 
AzureEnterprise.Tables 関数を使用し、特定の値に移動して結果を取得します。
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
テーブル
```



