---
title: Text.Contains
---

# Text.Contains


傳回文字是否包含子字串。


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

偵測 `text` 是否包含值 `substring`。如果找到值，則傳回 True。此函數不支援萬用字元或規則運算式。  
  
選擇性引數 `comparer` 可用來指定不區分大小寫或文化特性與地區設定感知的比較。 公式語言中提供下列內建比較子:

-   `Comparer.Ordinal`: 用來執行區分大小寫的序數比較
-   `Comparer.OrdinalIgnoreCase`: 用來執行不區分大小寫的序數比較
-   `Comparer.FromCulture`: 用來執行文化特性感知的比較

如果第一個引數為 Null，此函數會傳回 Null。  
  
會逐字處理所有字元。例如，"DR"、" DR"、"DR " 和 " DR " 不被視為彼此相等。


## Examples

### Example #1
找出文字 "Hello World" 是否包含 "Hello"。
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
找出文字 "Hello World" 是否包含 "hello"。
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
使用不區分大小寫的比較子來尋找文字 "Hello World" 是否包含 "hello"。
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
在表格中尋找帳戶代碼中包含 "A-" 或 "7" 的資料列。
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
