---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformerar kolumnnamn genom att använda den givna funktionen.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transformerar kolumnnamn genom att använda den givna <code>nameGenerator</code>-funktionen. Giltiga alternativ:    <div>      <code>MaxLength</code> anger maxlängden för nya kolumnnamn. Om den givna funktionen resulterar i ett längre kolumnnamn kommer det långa namnet att trimmas.    </div>    <div>      <code>Comparer</code> används för att styra jämförelsen samtidigt som nya kolumnnamn genereras. Jämförelsefunktioner kan användas för att tillhandahålla skiftlägesokänsliga eller kultur- och språkmedvetna jämförelser.    </div>    <div>      Följande inbyggda jämförelsefunktioner är tillgängliga i formelspråket:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: Används för att genomföra en exakt ordningstalsjämförelse</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Används för att genomföra en exakt skiftlägesokänslig ordningstalsjämförelse</li>      <li> <code>Comparer.FromCulture</code>: Används för att genomföra en kulturmedveten jämförelse</li>    </ul>    


## Examples

### Example #1 
Ta bort &lt;code&gt;#(tab)&lt;/code&gt;-tecknet från kolumnnamn
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Ändra kolumnnamn för att generera skiftlägesokänsliga namn med längden 6.
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
