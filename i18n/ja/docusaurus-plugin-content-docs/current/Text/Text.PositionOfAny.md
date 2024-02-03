---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

指定された文字の、テキスト値内での最初の位置を返します (見つからない場合は -1)。


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

<code>text</code> で見つかる、リスト <code>characters</code> 内のいずれかの文字の最初の位置を返します。
    省略可能なパラメーター <code>occurrence</code> を使用すると、返される出現位置を指定できます。


## Examples

### Example #1 
テキスト &#34;Hello, World!&#34; 内の &#34;W&#34; または &#34;H&#34; の最初の位置を調べます。
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
テキスト &#34;Hello, World!&#34; 内の &#34;W&#34; または &#34;H&#34; のすべての位置を調べます。
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
