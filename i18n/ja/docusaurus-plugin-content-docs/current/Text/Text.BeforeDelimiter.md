---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

指定した <code>delimiter</code> の前の <code>text</code> の部分を返します。    省略可能な数値 <code>index</code> は、想定される <code>delimiter</code> の回数を示します。    省略可能なリスト <code>index</code> は、想定される <code>delimiter</code> の回数、およびインデックス作成を入力の先頭または末尾のどちらから行うかを示しています。


## Examples

### Example #1 
最初のハイフンの前の &#34;111-222-333&#34; の部分を取得します。
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
2 番目のハイフンの前の &#34;111-222-333&#34; の部分を取得します。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
最後から 2 番目のハイフンの前の &#34;111-222-333&#34; の部分を取得します。
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
