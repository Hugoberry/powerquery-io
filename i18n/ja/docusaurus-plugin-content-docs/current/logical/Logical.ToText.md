---
title: Logical.ToText
---

# Logical.ToText


指定された論理値に基づいて、テキスト &#34;true&#34; または &#34;false&#34; を返します。


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

論理値 <code>logicalValue</code> (<code>true</code> または <code>false</code>) からテキスト値を作成します。<code>logicalValue</code> が論理値でない場合は、例外がスローされます。


## Examples

### Example #1 
論理 &lt;code&gt;true&lt;/code&gt; からテキスト値を作成します。
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
