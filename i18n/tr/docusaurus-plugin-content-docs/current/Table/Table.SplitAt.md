---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Belirtilen ilk sayı satırlarını ve kalan satırları içeren bir liste döndürür.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

İki tablo içeren bir liste geri gönderir: <code>table</code> öğesinin ilk N satırını içeren bir tablo ( <code>count</code> tarafından belirtildiği gibi) ve <code>table</code> öğesinin kalan satırlarını içeren bir tablo.Elde edilen listedeki tablolar tam olarak bir kez ve sırayla listeleniyorsa, işlev <code>table</code> öğesini yalnızca bir kez listeler.


## Examples

### Example #1 
Tablonun ilk iki satırını ve tablonun kalan satırlarını geri gönderir.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
