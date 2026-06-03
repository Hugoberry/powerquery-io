---
title: DateTime.From
---

# DateTime.From


Maakt een datum-/tijd van de opgegeven waarde.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Hiermee wordt een `datetime`\-waarde geretourneerd van de opgegeven waarde `value`. Er kan ook een optionele `culture` worden opgegeven (bijvoorbeeld: nl-NL). Als de opgegeven waarde `value` `null` is, wordt door `DateTime.From` `null` geretourneerd. Als de opgegeven waarde `value` `datetime` is, wordt `value` geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een `datetime`\-waarde:

-   `text`: een `datetime`\-waarde van de tekstweergave. Raadpleeg `DateTimeZone.FromText` voor meer informatie.
-   `date`: een `datetime` met `value` als het datumcomponent en `12:00:00 AM` als het tijdcomponent.
-   `datetimezone`: het lokale `datetime`\-equivalent van `value`.
-   `time`: een `datetime` met het datumequivalent van de OLE-automatiseringsdatum van `0` als het datumcomponent en `value` als het tijdcomponent.
-   `number`: een `datetime`\-equivalent van de OLE-automatiseringsdatum die wordt uitgedrukt door `value`.

Als `value` van een ander type is, wordt er een fout geretourneerd.


## Examples

### Example #1
`#time(06, 45, 12)` omzetten naar een `datetime`waarde.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
`#date(1975, 4, 4)` omzetten naar een `datetime`waarde.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
