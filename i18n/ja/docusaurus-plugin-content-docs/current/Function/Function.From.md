---
title: Function.From
---

# Function.From


## Description

1 つのリスト引数を取得する関数の上に特定のパラメーターのシグネチャを持つ関数を作成します。


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

単項の関数 <code>function</code> を取得し、<code>functionType</code> の種類の新しい関数を作成します。これは、その引数からリストを構築して、それを <code>function</code> に渡します。


## Examples

### Example #1 
List.Sum を、2 つの引数が 1 つにまとめられた関数に変換します
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
リストを取得する関数を、2 つの引数の関数に変換します。
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
