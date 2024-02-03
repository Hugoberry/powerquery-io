---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transformuje nazwy kolumn za pomocą podanej funkcji.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Przekształca nazwy kolumn przy użyciu podanej funkcji <code>nameGenerator</code>. Prawidłowe opcje:    <div>      <code>MaxLength</code> Określa maksymalną długość nowych nazw kolumn. Jeśli podana funckja zwróci dłuższą nazwe kolumny, to zostanie ona przycięta.    </div>    <div>      <code>Comparer</code> to funkcja porównująca, używana do sterowania porównywaniem podczas generowania nowych nazw kolumn. Funkcje porównujące mogą być używane do przeprowadzania porównania nie wymagającego rozróżniania wielkości liter, uwzględniającego uwarunkowania kulturowe lub lokalne.    </div>    <div>      W języku formuły są dostępne następujące wbudowane funkcje porównujące:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: służy do wykonywania dokładnego porównania porządkowego</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: służy do wykonywania dokładnego porównania bez uwzględniania wielkości liter</li>      <li> <code>Comparer.FromCulture</code>: służy do porównywania uwzględniającego uwarunkowania kulturowe</li>    </ul>    


## Examples

### Example #1 
Usuń znak &lt;code&gt;#(tab)&lt;/code&gt; z nazw kolumn
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transformuj nazwy kolumn w celu wygenerowania 6-znakowych nazw bez rozróżniania wielkości liter.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
