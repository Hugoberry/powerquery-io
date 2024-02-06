---
title: Guid.From
---

# Guid.From


返回给定值的 guid 值。


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Remarks

从给定的 <code>value</code> 返回 <code>Guid.Type</code> 值。如果给定的 <code>value</code> 为 <code>null</code>，则 <code>Guid.From</code> 返回 <code>null</code>。将执行检查以确定给定的 <code>value</code> 是否采用了可接受的格式。示例中提供了可接受的格式。


## Examples

### Example #1 
可以将 Guid 提供为 32 个连续的十六进制数字。
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
可以将 Guid 提供为 32 个由连字符分隔成 8-4-4-4-12 块的十六进制数字。
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
可以将 Guid 提供为 32 个由连字符分隔且括在大括号中的十六进制数字。
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
可以将 Guid 提供为 32 个由连字符分隔且括在括号中的十六进制数字。
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
