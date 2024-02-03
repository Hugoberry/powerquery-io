---
title: Binary.FromText
---

# Binary.FromText


## Description

将来自文本格式的数据解码为二进制值。


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

返回将文本值 <code>text</code> 转换为二进制值(<code>number</code> 的列表)的结果。可以指定 <code>encoding</code> 以便指示在文本值中使用的编码。      以下 <code>BinaryEncoding</code> 值可用于 <code>encoding</code>。      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 编码</li>        <li><code>BinaryEncoding.Hex</code>: 十六进制编码</li>      </ul>


## Examples

### Example #1 
将 &#34;1011&#34; 解码为二进制值。
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
将 &#34;1011&#34; 解码为具有十六进制编码的二进制值。
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
