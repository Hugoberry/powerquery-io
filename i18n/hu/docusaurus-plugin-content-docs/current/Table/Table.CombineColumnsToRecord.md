---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

A megadott oszlopokat kombinálja egy rekordértékekkel rendelkező új oszlopban, amelyben minden rekordnak a kombinált oszlopok neveinek és értékeinek megfelelő mezőnevei és értékei vannak.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Details

A(z) <code>table</code> meghatározott oszlopait új, <code>newColumnName</code> nevű, rekordértékű oszlopba kombinálja, amelyben mindegyik rekord a kombinált oszlopok oszlopnevének és értékének megfelelő mezőnévvel és értékkel rendelkezik. Ha egy rekord van meghatározva a(z) <code>options</code> esetén, a következő lehetőségek adhatók meg:    <ul>     <li> <code>DisplayNameColumn</code>: Amikor szövegként van meghatározva, azt jelzi, hogy az adott oszlopnevet a rekord megjelenített neveként kell kezelni. Ennek nem kell a magában a rekordban lévő valamelyik oszlopnak lennie.</li>     <li> <code>TypeName</code>: Amikor szövegként van meghatározva, az eredményül kapott rekord logikai típusának nevét adja meg, amely az adatok betöltése során a betöltési környezet viselkedésének vezérlésére használható.</li>    </ul>    



## Category
Table.Transformation
