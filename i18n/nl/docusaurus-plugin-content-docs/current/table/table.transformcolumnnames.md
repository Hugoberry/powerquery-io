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

Hiermee worden kolomnamen omgezet met de opgegeven `nameGenerator`\-functie. Geldige opties:

`MaxLength` geeft de maximumlengte van nieuwe kolomnamen op. Als de opgegeven functie een langere kolomnaam als resultaat heeft, wordt de langere naam ingekort.

`Comparer` wordt gebruikt voor het aansturen van de vergelijking en tegelijkertijd voor het genereren van nieuwe kolomnamen. Vergelijkingsfuncties kunnen worden gebruikt om bij de vergelijking geen onderscheid te hoeven maken tussen hoofdletters en kleine letters of om bij de vergelijking rekening te houden met de cultuur en aard van de omgeving.

De volgende ingebouwde vergelijkingsfuncties kunnen in formules worden gebruikt:

-   `Comparer.Ordinal`: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd
-   `Comparer.OrdinalIgnoreCase`: waarmee exacte ordinale vergelijkingen kunnen worden uitgevoerd waarbij geen onderscheid wordt gemaakt tussen hoofdletters en kleine letters
-   `Comparer.FromCulture`: waarmee vergelijkingen met inachtneming van de cultuur kunnen worden uitgevoerd


## Examples

### Example #1
Verwijder het teken `#(tab)` uit kolomnamen
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
