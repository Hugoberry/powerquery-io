---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Pretvori imena stolpcev z navedeno funkcijo.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Pretvori imena stolpcev z navedeno funkcijo <code>nameGenerator</code>. Veljavne možnosti:    <div>      <code>MaxLength</code> določa največjo dolžino imen stolpcev. Če je rezultat navedene funkcije daljše ime stolpca, bo dolgo ime obrezano.    </div>    <div>      <code>Comparer</code> se uporablja za nadzor primerjave pri ustvarjanju novih imen stolpcev. S primerjalniki je mogoče določiti primerjave, ki ne razlikujejo med velikimi in malimi črkami oziroma upoštevajo kulturo ali območne nastavitve.    </div>    <div>      Za jezik formule so na voljo ti vgrajeni primerjalniki:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: uporablja se za natančno primerjavo vrstilnih števnikov</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami</li>      <li> <code>Comparer.FromCulture</code>: uporablja se za primerjavo, ki upošteva kulturo</li>    </ul>    


## Examples

### Example #1 
Odstrani znak &lt;code&gt;#(tab)&lt;/code&gt; iz imen stolpcev
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Pretvorite imena stolpcev, da ustvarite imena, ki vsebujejo 6 znakov in ne razlikujejo med velikimi in malimi črkami.
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
