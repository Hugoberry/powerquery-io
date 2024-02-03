---
title: Guid.From
---

# Guid.From


## Description

指定された値から GUID 値を返します。


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

指定された <code>value</code> から <code>Guid.Type</code> の値を返します。指定された <code>value</code> が <code>null</code> の場合、<code>Guid.From</code> は <code>null</code> を返します。 指定された <code>value</code> が使用可能な形式かどうかを判断するためのチェックが行われます。使用可能な形式については例をご覧ください。


## Examples

### Example #1 
GUID は、連続した 32 文字の 16 進数として指定できます。
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID は、ハイフンで区切られた 8-4-4-4-12 のブロックで、32 文字の 16 進数として指定できます。
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID は、ハイフンで区切られ、中かっこで囲まれた 32 文字の 16 進数として指定できます。
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID は、ハイフンで区切られ、かっこで囲まれた 32 文字の 16 進数として指定できます。
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
