---
title: Number.From
---

# Number.From


Maakt een getal van de opgegeven waarde


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Hiermee wordt een `number`\-waarde geretourneerd van de opgegeven waarde `value`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL). Als de opgegeven waarde `value` `null` is, wordt door `Number.From` `null` geretourneerd. Als de opgegeven waarde `value` `number` is, wordt `value` geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een `number`\-waarde:

-   `text`: een `number`\-waarde van de tekstweergave. Algemene tekstindelingen worden verwerkt (15, 3.423,10, 5.0E-10). Raadpleeg `Number.FromText` voor meer informatie.
-   `logical`: 1 voor `true`, 0 voor `false`.
-   `datetime`: een zwevendekommagetal met dubbele nauwkeurigheid dat een OLE-automatiseringsdatumequivalent bevat.
-   `datetimezone`: een zwevendekommagetal met dubbele nauwkeurigheid dat een OLE-automatiseringsdatumequivalent bevat van de lokale datum en tijd van `value`.
-   `date`: een zwevendekommagetal met dubbele nauwkeurigheid dat een OLE-automatiseringsdatumequivalent bevat.
-   `time`: uitgedrukt in gedeeltelijke dagen.
-   `duration`: uitgedrukt in gedeeltelijke en gehele dagen.

Als `value` van een ander type is, wordt er een fout geretourneerd.


## Examples

### Example #1
De `number` waarde van `"4"` ophalen.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
De `number` waarde van `#datetime(2020, 3, 20, 6, 0, 0)` ophalen.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
De waarde `number` ophalen uit `"12.3%"`.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
