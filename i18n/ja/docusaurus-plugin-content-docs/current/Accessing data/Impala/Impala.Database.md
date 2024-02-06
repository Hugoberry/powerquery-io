---
title: Impala.Database
---

# Impala.Database


Impala クラスターからデータをインポートします


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Impala クラスター <code>server</code> からデータをインポートします。ポートが指定されていない場合、既定のポート 21050 を使用します。


## Examples

### Example #1 
Impala クラスター内のテーブルを一覧にします。
```powerquery
Impala.Database("localhost:21050")
```



