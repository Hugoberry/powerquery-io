---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Pārveido kolonnu nosaukumus, izmantojot norādīto funkciju.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Pārveido kolonnu nosaukumus, izmantojot norādīto funkciju <code>nameGenerator</code>. Tālāk norādītas derīgās opcijas:    <div>      <code>MaxLength</code>: norāda jauno kolonnu nosaukumu maksimālo garumu. Ja attiecīgā funkcija atgriež garāku kolonnas nosaukumu, šis nosaukums tiek saīsināts.    </div>    <div>      <code>Comparer</code>: izmanto, lai kontrolētu salīdzināšanu, kad tiek ģenerēti jaunie kolonnu nosaukumi. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.    </div>    <div>      Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: izmanto precīzai kārtas salīdzināšanai</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: izmanto precīzai kārtas salīdzināšanai, kas nav reģistrjutīga</li>      <li> <code>Comparer.FromCulture</code>: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu</li>    </ul>    


## Examples

### Example #1 
Noņemt kolonnu nosaukumiem rakstzīmi &lt;code&gt;#(tab)&lt;/code&gt;
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transformē kolonnu nosaukumus, lai ģenerētu nosaukumus, kas nav garāki par 6 rakstzīmēm un nav reģistrjutīgi.
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
