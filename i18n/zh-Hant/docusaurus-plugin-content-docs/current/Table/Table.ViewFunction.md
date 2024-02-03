---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

建立可由檢視上定義的處理常式攔截的函式 (透過 Table.View)。


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

根據可在 <code>Table.View</code> 建立的檢視中所處理的 <code>function</code> 來建立檢視函式。<br /><code>Table.View</code> 的 <code>OnInvoke</code> 處理常式可用於定義檢視函式的處理常式。<br />如同內建作業的處理常式，若未指定 <code>OnInvoke</code> 處理常式，或其未處理檢視函式，或是該處理常式引發錯誤，則會將 <code>function</code> 套用至檢視頂端。<br />如需更完整之 <code>Table.View</code> 與自訂檢視函式的描述，請參閱已發佈的 Power Query 自訂連接器文件。<br />



## Category
Table.Table construction
