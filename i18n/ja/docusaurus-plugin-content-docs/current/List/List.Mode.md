---
title: List.Mode
---

# List.Mode


リスト内で出現回数が最も多い値を返します。


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

リスト <code>list</code> 内で出現回数が最も多い項目を返します。リストが空の場合、例外がスローされます。出現回数が最も多い項目が複数ある場合、最後の項目が選択されます。    省略可能な <code>comparisonCriteria</code> 値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。


## Examples

### Example #1 
リスト &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; 内で出現回数が最も多い項目を求めます。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
リスト &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 内で出現回数が最も多い項目を求めます。
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
