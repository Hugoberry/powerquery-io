---
title: Json.FromValue
---

# Json.FromValue


## Description

Hiervoor een JSON-weergave van een opgegeven waarde gegenereerd.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Hiermee wordt een JSON-weergave van een opgegeven waarde <code>value</code> gemaakt met een tekstcodering die wordt bepaald met <code>encoding</code>. Als <code>encoding</code> wordt weggelaten, wordt UTF8 gebruikt. Waarden worden als volgt weergegeven:<br /> <ul>        <li>Null-, tekst- en logische waarden worden weergegeven als de overeenkomende JSON-typen</li>        <li>Getallen worden weergegeven als cijfers in JSON, maar <code>#infinity</code>, <code>-#infinity</code> en <code>#nan</code> worden geconverteerd naar null</li>        <li>Lijsten worden weergegeven als JSON-matrices.</li>        <li>Records worden weergegeven als JSON-objecten</li>        <li>Tabellen worden weergegeven als een matrix met objecten</li>        <li>Datums, tijden, datetimes, datetimezones en duur worden weergeven als ISO 8601-tekst</li>        <li>Binaire waarden worden weergegeven als tekst met Base 64-codering</li>        <li>Voor typen en functies wordt een fout gegenereerd</li> </ul>    


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
