---
title: Logical.From
---

# Logical.From


Creates a logical from the given value.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Returns a <code>logical</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Logical.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>logical</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>logical</code> value:      <ul>        <li><code>text</code>: A <code>logical</code> value from the text value, either <code>"true"</code> or <code>"false"</code>. Refer to <code>Logical.FromText</code> for details.</li>        <li><code>number</code>: <code>false</code> if <code>value</code> equals <code>0</code>, <code>true</code> otherwise.</li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Convert &lt;code&gt;2&lt;/code&gt; to a &lt;code&gt;logical&lt;/code&gt; value.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
