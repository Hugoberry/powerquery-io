---
title: List.Alternate
---

# List.Alternate


## Description

リスト内でオフセットが奇数であるすべての要素によって構成されたリストを返します。


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

リスト内でオフセットが奇数であるすべての要素によって構成されたリストを返します。パラメーターに応じて、リスト <code>list</code> の値を交互に取得したりスキップしたりします。    <ul>    <li><code>count</code>: 毎回スキップされる値の数を指定します。</li>    <li><code>repeatInterval</code>: スキップされる値の間の追加される値の数を示す、省略可能な繰り返し間隔。</li>    <li><code>offset</code>: 初期オフセットで値のスキップを開始するための、省略可能なオフセット パラメーター。</li>    </ul>


## Examples

### Example #1 
最初の数をスキップして、\{1..10} からリストを作成します。
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
1 つおきに数をスキップして、\{1..10} からリストを作成します。
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
1 から始めて、1 つおきに数をスキップして、\{1..10} からリストを作成します。
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
1 から始めて、1 つの値をスキップし、2 つの値を保持するというパターンで、\{1..10} からリストを作成します。
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
