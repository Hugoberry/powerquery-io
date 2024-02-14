---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformeert kolomnamen door de opgegeven functie te gebruiken.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Hiermee worden kolomnamen omgezet met de opgegeven <code>nameGenerator</code>-functie. Geldige opties: <div> <code>MaxLength</code> geeft de maximumlengte van nieuwe kolomnamen op. Als de opgegeven functie een langere kolomnaam als resultaat heeft, wordt de langere naam ingekort. </div> <div> <code>Comparer</code> wordt gebruikt voor het aansturen van de vergelijking en tegelijkertijd voor het genereren van nieuwe kolomnamen. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving. </div> <div> De volgende ingebouwde vergelijkingsfuncties kunnen in formules worden gebruikt: </div> <ul> <li><code>Comparer.Ordinal</code>: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd</li> <li><code>Comparer.OrdinalIgnoreCase</code>: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd waarbij geen onderscheid wordt gemaakt tussen hoofdletters en kleine letters</li> <li> <code>Comparer.FromCulture</code>: waarmee vergelijkingen met inachtneming van de cultuur kunnen worden uitgevoerd</li> </ul>    


## Examples

### Example #1 
Verwijder het teken &lt;code&gt;#(tab)&lt;/code&gt; uit kolomnamen
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Kolomnamen transformeren naar namen met een lengte van 6 tekens, zonder rekening te houden met hoofdlettergebruik.
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
