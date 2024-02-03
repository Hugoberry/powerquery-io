---
title: Text.SplitAny
---

# Text.SplitAny


## Description

区切り記号のいずれかの文字で分割されたテキスト値の一覧を返します。


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

指定された区切り記号 <code>separators</code> の任意の文字に基づいてテキスト値 <code>text</code> を分割した結果のテキスト値の一覧を返します。


## Examples

### Example #1 
テキスト値 &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34; から一覧を作成します。
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
