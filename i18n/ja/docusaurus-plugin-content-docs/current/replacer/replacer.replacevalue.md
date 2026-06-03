---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


指定された入力内の値を置き換えます。


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

元の `value` 内の `old` 値を `new` 値に置き換えます。この置換関数は、`List.ReplaceValue` および `Table.ReplaceValue` で使用できます。


## Examples

### Example #1
値 11 を値 10 に置き換えます。
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
