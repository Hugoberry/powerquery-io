---
title: MailChimp.Instance
---

# MailChimp.Instance


MailChimp API エンドポイントから生の応答結果を返します。


## Syntax

```powerquery
MailChimp.Instance(
    path as text
) as table
```


## Remarks

MailChimp API に対する呼び出しを行い、生の応答を返します。


## Examples

### Example #1 
指定されたキャンペーンの reports/click-details MailChimp API エンドポイントからの生データを返します。
```powerquery
MailChimp.Instance("reports/{campaign_id}/click-details")
```

Result: 
```powerquery
指定されたキャンペーンからのクリック詳細の生データ。
```



