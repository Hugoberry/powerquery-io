---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


64 ビット長の数値から datetime を作成します。


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

<code>fileTime</code> の値から <code>datetime</code> の値を作成し、ローカル タイム ゾーンに変換します。filetime は Windows ファイル時間値であり、西暦 1601 年 1 月 1 日の深夜 12:00 からの経過時間を 100 ナノ秒間隔で表します。年月日はキリスト紀元で、時刻は協定世界時 (UTC) です。


## Examples

### Example #1 
&lt;code&gt;129876402529842245&lt;/code&gt; を datetime 値に変換します。
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
