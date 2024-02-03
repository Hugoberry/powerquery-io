---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Берілген функцияны пайдалану арқылы бағанды түрлендіреді.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Берілген <code>nameGenerator</code> функциясы арқылы баған атауларын түрлендіреді. Жарамды опциялар:    <div>      <code>MaxLength</code> жаңа баған атауларының максималды ұзындығын білдіреді. Берілген функцияда баған атауы ұзын болса, ол қысқартылады.    </div>    <div>      <code>Comparer</code> жаңа баған атауларын жасау кезінде салыстыруды басқару үшін қолданылады. Салыстыру функцияларын пернетақта есебімен немесе тіл және аймақ параметрлерін есепке алатын салыстыру үшін қолдануға болады.    </div>    <div>      Формула тілінде келесі ендірілген салыстыру функциялары бар:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: пернетақта регистрінің есебімен реттік нөмірі бойынша дәл салыстыру үшін қолданылады</li>      <li> <code>Comparer.FromCulture</code>: аймақтық параметрлер бойынша салыстыру үшін пайдаланылады</li>    </ul>    


## Examples

### Example #1 
&lt;code&gt;#(tab)&lt;/code&gt; таңбасын баған аттарынан алып тастау
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Ұзындығы 6 регистрді елемейтін атауларды жасау үшін баған атауларын түрлендіріңіз.
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
