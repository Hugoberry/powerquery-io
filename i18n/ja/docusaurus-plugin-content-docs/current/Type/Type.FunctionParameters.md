---
title: Type.FunctionParameters
---

# Type.FunctionParameters


## Description

関数型のパラメーターの名前にフィールドの値が設定されたレコードと、関連する型に設定されたフィールドの値を返します。


## Syntax

```powerquery
Type.FunctionParameters(
    type as type
) as record
```


## Details

<code>type</code> のパラメーターの名前にフィールドの値が設定されたレコードと、関連する型に設定されたフィールドの値を返します。


## Examples

### Example #1 
関数に対するパラメーターの種類を検索します (&lt;code&gt;(x as number, y as text)&lt;/code&gt;)。
```powerquery
Type.FunctionParameters(type function (x as number, y as text) as any)
```

Result: 
```powerquery
[x = type number, y = type text]
```




## Category
Type
