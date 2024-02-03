---
title: Binary.From
---

# Binary.From


## Description

Creates a binary from the given value


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Returns a <code>binary</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Binary.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>binary</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>binary</code> value:      <ul>        <li><code>text</code>: A <code>binary</code> value from the text representation. Refer to <code>Binary.FromText</code> for details.</li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Get the &lt;code&gt;binary&lt;/code&gt; value of &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
