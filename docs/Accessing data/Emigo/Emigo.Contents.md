---
title: Emigo.Contents
---

# Emigo.Contents



## Syntax

```powerquery
Emigo.Contents(
    optional DataRestrictionType as text,
    optional DataRestrictionValue as text,
    optional DataRestrictionMode as text,
    optional AuthorizationMode as text
) as table
```


## Remarks

The purpose of the method is to set parameters for odata feed data source calls, thus the non-function calls may be limited by, for example, the period


## Examples

### Example #1 
The purpose of the function is set the feed call parametrs
```powerquery
let
    Source = Emigo.Contents("DAYS", "3", "exact", null),
    emigoList = Source{[Key="emigoList"]}[Data],
    Dziennik_table = emigoList{[Name="Dziennik",Signature="table"]}[Data],
    #"Removed Columns" = Table.RemoveColumns(Dziennik_table,{"CzasWykonywaniaSekundy", "CzyCzasUKlienta", "CzyCzasDojazdu", "CzyZdjecia", "Odrzucona", "Obligatoryjna", "Wykonana", "DataCzasRozpoczecia", "DataGodzina", "Data", "Hierarchia", "IDCzynnosciTypy", "IDDziennikGrup", "IDGrupaDocelowa", "IDLogin", "IDKlient", "IdPrzOdm", "IDZadania", "IDTypZadania", "IDTME", "SekundyMiedzyCzynnosciami", "IloscZdjec", "OkresWykonywaniaSekundy", "CzyZadanieWykonane", "AnulowaneNaTME", "OdlegloscKlientKM", "IDKatZad"}),
    #"Filtered Rows" = Table.SelectRows(#"Removed Columns", each true)
in
    #"Filtered Rows"
```

Result: 
```powerquery
"#Filtered Rows"({"IDDZiennik", "DataNumerycznie"}, {{132806, 20190220}, {132803, 20190220}})
```



