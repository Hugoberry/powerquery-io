---
title: Json.FromValue
---

# Json.FromValue


Hiervoor een JSON-weergave van een opgegeven waarde gegenereerd.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Hiermee wordt een JSON-weergave van een opgegeven waarde `value` gemaakt met een tekstcodering die wordt bepaald met `encoding`. Als `encoding` wordt weggelaten, wordt UTF8 gebruikt. Waarden worden als volgt weergegeven:

-   Null-, tekst- en logische waarden worden weergegeven als de overeenkomende JSON-typen
-   Getallen worden weergegeven als cijfers in JSON, maar `#infinity`, `-#infinity` en `#nan` worden geconverteerd naar null
-   Lijsten worden weergegeven als JSON-matrices.
-   Records worden weergegeven als JSON-objecten
-   Tabellen worden weergegeven als een matrix met objecten
-   Datums, tijden, datetimes, datetimezones en duur worden weergeven als ISO 8601-tekst
-   Binaire waarden worden weergegeven als tekst met Base 64-codering
-   Voor typen en functies wordt een fout gegenereerd


## Examples

### Example #1
Converteer een complexe waarde naar JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
