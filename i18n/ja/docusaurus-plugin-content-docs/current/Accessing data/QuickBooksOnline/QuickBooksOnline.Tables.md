---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


QuickBooks Online からデータをインポートします。


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Remarks

        QuickBooks Online で使用可能なテーブルをリストしたテーブルを返します。省略可能なオプション レコード パラメーター <code>options</code> を指定して、以下のオプションを制御できます。          <ul>            <li><code>ConnectionTimeout</code>: サーバーへの接続の試行を破棄するまで待機する長さを制御する期間。</li>        <li><code>CommandTimeout</code>: サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。</li></ul>        レコード パラメーターは、[option1 = value1, option2 = value2...] という形式で指定します。    


