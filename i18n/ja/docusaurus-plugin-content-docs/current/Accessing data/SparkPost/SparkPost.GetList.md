---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

この関数は SparkPost API v1 で提供される "Lists" エンドポイントを呼び出すために使用できます。この関数を使用して SparkPost API に呼び出しを行うときには、SparkPost API には厳密な API レートの制限があることに留意してください。SparkPost サーバーから 429 状態コードが返される場合、このレート制限に達し、さらに呼び出しを行うには数分待つ必要が生じます。


## Examples

### Example #1 
いずれかの SparkPost API v1 &#34;Lists&#34; エンドポイントからのデータが取り込まれた単一列が含まれるテーブルを返します (詳細については、SparkPost のドキュメントを参照してください)。
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



