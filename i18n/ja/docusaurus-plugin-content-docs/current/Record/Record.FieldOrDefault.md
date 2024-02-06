---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


レコード内の指定されたフィールドの値を返します。フィールドが見つからなかった場合は、既定値を返します。


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

レコード <code>record</code> 内の指定されたフィールド <code>field</code> の値を返します。フィールドが見つからなかった場合は、省略可能な <code>defaultValue</code> を返します。


## Examples

### Example #1 
レコード内のフィールド &#34;Phone&#34; の値を調べます。フィールドが存在しない場合は、NULL を返します。
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
レコード内のフィールド &#34;Phone&#34; の値を調べます。フィールドが存在しない場合は、既定値を返します。
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
