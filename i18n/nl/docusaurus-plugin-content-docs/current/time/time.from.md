---
title: Time.From
---

# Time.From


Maakt een tijd van de opgegeven waarde.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Hiermee wordt een `time`\-waarde geretourneerd van de opgegeven waarde `value`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL). Als de opgegeven waarde `value` `null` is, wordt door `Time.From` `null` geretourneerd. Als de opgegeven waarde `value` `time` is, wordt `value` geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een `time`\-waarde:

-   `text`: een `time`\-waarde van de tekstweergave. Raadpleeg `Time.FromText` voor meer informatie.
-   `datetime`: het tijdcomponent van de `value`.
-   `datetimezone`: het tijdcomponent van de lokale datetime-equivalent van `value`.
-   `number`: een `time`\-equivalent voor het aantal gedeeltelijke dagen, uitgedrukt door `value`. Als `value` negatief of groter dan 1 is, wordt een fout geretourneerd.

Als `value` van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1
Het getal `0.7575` converteren naar een `time`waarde.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
`#datetime(1899, 12, 30, 06, 45, 12)` converteren naar een `time`waarde.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
