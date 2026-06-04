---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


指定した変数の値を返すか、変数が定義されていない場合は既定値を返します。


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

現在の評価環境で定義されている、指定された変数 `identifier` の値を返します。変数が定義されていない場合は、オプションの `defaultValue` が返されます。



## Category
Values.Implementation
