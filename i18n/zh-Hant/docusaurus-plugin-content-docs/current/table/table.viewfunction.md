---
title: Table.ViewFunction
---

# Table.ViewFunction


建立可由檢視上定義的處理常式攔截的函式 (透過 Table.View)。


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

根據可在 `Table.View` 建立的檢視中所處理的 `function` 來建立檢視函式。

`Table.View` 的 `OnInvoke` 處理常式可用於定義檢視函式的處理常式。

如同內建作業的處理常式，若未指定 `OnInvoke` 處理常式，或其未處理檢視函式，或是該處理常式引發錯誤，則會將 `function` 套用至檢視頂端。

如需更完整之 `Table.View` 與自訂檢視函式的描述，請參閱已發佈的 Power Query 自訂連接器文件。



## Category
Table.Table construction
