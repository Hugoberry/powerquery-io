---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


関数型の呼び出しに必要なパラメーターの最小数を示す数値を返します。


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

関数の入力値 <code>type</code> の呼び出しに必要なパラメーターの最小数を示す数値を返します。


## Examples

### Example #1 
関数に対して必要なパラメーターの数を検索します (&lt;code&gt;(x as number, optional y as text)&lt;/code&gt;)。
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
