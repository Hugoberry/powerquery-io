---
title: List.Generate
---

# List.Generate


値の一覧を生成します。


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

指定された関数を使用して値の一覧を生成します。<code>initial</code> 関数は開始候補値を生成し、<code>condition</code>に対してテストされます。    候補の値が承認されると、結果リストの一部として返され、次の候補値は、新しく承認された値を <code>next</code> に渡すことで生成されます。    候補値が <code>condition</code> と一致しない場合、リスト生成プロセスは停止します。    省略可能なパラメーター <code>selector</code> を指定して、結果のリスト内の項目を変換することもできます。


## Examples

### Example #1 
10 から始まり、1 ずつ減数を繰り返し、各項目が 0 より大きいことを確認してリストを作成します。
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
x と y を含むレコードのリストを生成します (x は値、y はリスト)。x は、10 未満を保持し、リスト y 内の項目数を表す必要があります。リストが生成された後は、x の値のみを返します。
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
