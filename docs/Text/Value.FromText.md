---
title: Value.FromText
---

# Value.FromText


Creates a strongly-typed value from a textual representation.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Decodes a value from a textual representation, <code>text</code>, and interprets it as a value with an appropriate type.    <code>Value.FromText</code> takes a text value and returns a number, a logical value, a null value, a datetime value, a duration value, or a text value. The empty text value is interpreted as a null value.    An optional <code>culture</code> may also be provided (for example, "en-US").



## Category
Text.Conversions from and to text
