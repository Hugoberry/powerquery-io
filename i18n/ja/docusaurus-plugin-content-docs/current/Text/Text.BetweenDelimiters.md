---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

指定した <code>startDelimiter</code> と <code>endDelimiter</code> の間の <code>text</code> の部分を返します。    省略可能な数値 <code>startIndex</code> は、想定される <code>startDelimiter</code> の回数を示します。    省略可能なリスト <code>startIndex</code> は、想定される <code>startDelimiter</code> の回数、およびインデックス作成を入力の先頭と末尾のどちらから行うかを示しています。    <code>endIndex</code> は類似していますが、インデックス作成が <code>startIndex</code> に対して相対的に行われる点が異なります。


## Examples

### Example #1 
(最初の) 開きかっことそれに続く (最初の) 閉じかっこの間の &#34;111 (222) 333 (444)&#34; の部分を取得します。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
2 番目の開きかっことそれに続く最初の閉じかっこの間の &#34;111 (222) 333 (444)&#34; の部分を取得します。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
最後から 2 番目の開きかっことそれに続く2 番目の閉じかっこの間の &#34;111 (222) 333 (444)&#34; の部分を取得します。
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
