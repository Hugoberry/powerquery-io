---
title: Type.ForFunction
---

# Type.ForFunction


特定のパラメーターと戻り値の型の制約を持つ関数を表す型を返します。


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Remarks

`function type` を、`ReturnType` と `Parameters` のレコード `signature`、関数の呼び出しに必要な引数の最少数 `min` から作成します。


## Examples

### Example #1
X という数値パラメーターを取って数値を返す関数の型を作成します。
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
