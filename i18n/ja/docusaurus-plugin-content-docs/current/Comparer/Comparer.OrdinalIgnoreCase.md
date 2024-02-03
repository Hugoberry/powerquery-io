---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

序数ルールを使用して値を比較する、大文字小文字を区別しない比較演算子関数を返します。


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

序数規則を使用して指定された値 <code>x</code> と <code>y</code> を比較する、大文字と小文字を区別しない比較関数を返します。<br />        <br />        比較関数は 2 つの引数を承認し、最初の値が 2 番目の値以下であるか、等しいか、大きいかに基づいて -1、0、または 1 を返します。    


## Examples

### Example #1 
大文字小文字を区別しない序数ルールを使用して 、「Abc」と「abc」を比較します。「Abc」は &lt;code&gt;Comparer.Ordinal&lt;/code&gt; を使用すると、「abc」よりも小さくなります。
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
