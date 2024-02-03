---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

Łączy określone kolumny w nową kolumnę z wartościami w postaci rekordów, gdzie każdy rekord zawiera nazwy pól i wartości odpowiadające nazwom i wartościom połączonych kolumn.


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

Łączy określone kolumny <code>table</code> w nową kolumnę o nazwie <code>newColumnName</code> zawierającą wartości w postaci rekordów, przy czym każdy rekord ma nazwy i wartości pól odpowiadające nazwom i wartościom kolumn, które zostały połączone. W przypadku określenia rekordu dla elementu <code>options</code> można podać następujące opcje:    <ul>     <li> <code>DisplayNameColumn</code>: jeśli zostanie podana wartość w postaci tekstu, wskazuje, że dana nazwa kolumny ma być traktowana jako nazwa wyświetlana rekordu. Nie musi to być jedna z kolumn w rekordzie.</li>     <li> <code>TypeName</code>: jeśli zostanie podana wartość w postaci tekstu, określa nazwę typu logicznego dla wynikowego rekordu, której można używać podczas ładowania danych do sterowania zachowaniem środowiska ładowania.</li>    </ul>    



## Category
Table.Transformation
