---
title: Text.Contains
---

# Text.Contains


返回文本是否包含子字符串。


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

检测 `text` 是否包含值 `substring`。如果找到值，则返回 true。此函数不支持通配符或正则表达式。  
  
可选参数 `comparer` 可用于指定不区分大小写或区分区域性和区域设置的比较。 以下内置比较器以公式语言提供:

-   `Comparer.Ordinal`: 用于执行区分大小写的序号比较
-   `Comparer.OrdinalIgnoreCase`: 用于执行不区分大小写的序号比较
-   `Comparer.FromCulture`: 用于执行区域性感知比较

如果第一个参数为 null，则此函数返回 null。  
  
所有字符都按字面进行处理。例如，"DR"、" DR"、"DR " 和 " DR "不被视为彼此一致。


## Examples

### Example #1
查找文本 "Hello World" 是否包含 "Hello"。
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
查找文本 "Hello World" 是否包含 "hello"。
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
使用不区分大小写的比较器查找文本 "Hello World" 是否包含 "hello"。
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
在表中查找帐户代码中包含“a-”或“7”的行。
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
