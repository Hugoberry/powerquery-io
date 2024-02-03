---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transformuje názvy sloupců pomocí příslušné funkce.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transformuje názvy sloupců pomocí příslušné funkce <code>nameGenerator</code>. Platné možnosti:    <div>      <code>MaxLength</code>: Určuje maximální délku nových názvů sloupců. Pokud je výsledkem funkce delší název sloupce, název se ořízne.    </div>    <div>      <code>Comparer</code>: Používá se k řízení porovnání při generování nových názvů sloupců. Porovnávače se dají použít k porovnávání bez rozlišování velikosti písmen nebo porovnávání s ohledem na jazykovou verzi a národní prostředí.    </div>    <div>      V jazyku vzorců jsou k dispozici následující předdefinované porovnávače:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Používá se k provedení přesného porovnání ordinálů.</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Používá se k provedení přesného porovnání ordinálů bez rozlišování velikosti písmen.</li>      <li> <code>Comparer.FromCulture</code>: Používá se k provedení porovnání s ohledem na jazykovou verzi a národní prostředí.</li>    </ul>    


## Examples

### Example #1 
Odebrat znak &lt;code&gt;#(tab)&lt;/code&gt; z názvů sloupců
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Převede názvy sloupců, aby se generovaly názvy bez rozlišování velikosti písmen o délce 6.
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
