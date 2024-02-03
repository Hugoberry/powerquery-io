---
title: List.LastN
---

# List.LastN


## Description

リスト内の最後の値を返します。必要に応じて、返される値の数または条件を指定できます。


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

リスト <code>list</code> 内の最後の項目を返します。リストが空の場合、例外がスローされます。 この関数は、複数の項目の収集または項目のフィルター処理をサポートする省略可能なパラメーター <code>countOrCondition</code> を受け取ります。<code>countOrCondition</code> は、次の 3 つの方法で指定できます。 <ul>  <li>数値を指定した場合、その数までの項目が返されます。</li>  <li>条件を指定した場合、リストの末尾から処理が開始され、その条件を満たすすべての項目が返されます。条件を満たさない項目があると、それ以降の項目は考慮されません。</li>  <li>このパラメーターが NULL の場合、リスト内の最後の項目が返されます。</li> </ul>


## Examples

### Example #1 
リスト \{3, 4, 5, -1, 7, 8, 2} 内の最後の値を求めます。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
リスト \{3, 4, 5, -1, 7, 8, 2} 内の、0 を超える最後の値を求めます。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
