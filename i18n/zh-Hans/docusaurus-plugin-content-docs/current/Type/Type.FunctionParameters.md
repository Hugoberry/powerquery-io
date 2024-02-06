---
title: Type.FunctionParameters
---

# Type.FunctionParameters


返回带有字段值的记录以设置函数类型的参数名称，其值设置为对应类型。


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Remarks

返回带有字段值的记录以设置 <code>type</code> 的参数名称，其值设置为对应类型。


## Examples

### Example #1 
找到函数 &lt;code&gt;(x as number, y as text)&lt;/code&gt; 的参数类型。
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
