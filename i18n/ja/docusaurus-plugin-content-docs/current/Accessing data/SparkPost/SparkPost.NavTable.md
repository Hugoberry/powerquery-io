---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

ユーザーが指定した日数に関して集計されたデータが含まれる、SparkPost コネクタで公開されている組み込みテーブルを取得します。このコネクタを使用してこれらのテーブルを更新するか、SparkPost API に呼び出しを行う場合、SparkPost API には厳密な API レートの制限があることに留意してください。SparkPost サーバーから 429 状態コードが返される場合、このレート制限に達し、さらに呼び出しを行うには数分待つ必要が生じます。日数パラメーターの値を選択する際、API で格納できるのは 6 か月分のデータのみであることに注意してください。


