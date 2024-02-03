---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

指定した <code>delimiter</code> の後の <code>text</code> の部分を返します。    省略可能な数値 <code>index</code> は、想定される <code>delimiter</code> の回数を示します。    省略可能なリスト <code>index</code> は、想定される <code>delimiter</code> の回数、およびインデックス作成を入力の先頭または末尾のどちらからで行うかを示しています。


## Examples

### Example #1 
最初のハイフンの後の &#34;111-222-333&#34; の部分を取得します。
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
2 番目のハイフンの後の &#34;111-222-333&#34; の部分を取得します。
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
最後から 2 番目のハイフンの後の &#34;111-222-333&#34; の部分を取得します。
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
