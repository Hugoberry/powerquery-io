---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Retourneert een tekstweergave van de datum-/tijdzonewaarde.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Retourneert een tekstweergave van `dateTimeZone`. Er kan een optionele parameter `record` `options` worden opgegeven om aanvullende eigenschappen op te geven. `culture` wordt alleen gebruikt voor verouderde werkstromen. De `record` kan de volgende velden bevatten:

-   `Format`: een `text`waarde die de indeling aangeeft die moet worden gebruikt. Ga naar https://go.microsoft.com/fwlink/?linkid=2180104 en https://go.microsoft.com/fwlink/?linkid=2180105 voor meer informatie. Als u dit veld weglaat of `null` opgeeft, wordt de datum opgemaakt aan de hand van de standaardwaarde die is gedefinieerd door `Culture`.
-   `Culture`: als `Format` niet nul is, worden bepaalde indelingsaanduidingen bepaald door `Culture`. Bijvoorbeeld: in `"en-US"` `"MMM"` is `"Jan", "Feb", "Mar", ...`, terwijl in `"ru-RU"` `"MMM"` is `"янв", "фев", "мар", ...`. Wanneer `Format` is `null`, wordt met `Culture` de standaardindeling bepaald die moet worden gebruikt. Als `Culture` de waarde `null` heeft of niet wordt gebruikt, wordt `Culture.Current` gebruikt.

Als u oudere werkstromen wilt ondersteunen, kunnen `options` en `culture` ook tekstwaarden zijn. Dit heeft hetzelfde gedrag als bij `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Converteer `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` naar een `text`\-waarde. *Uitvoer van resultaten kan variëren afhankelijk van de huidige culture.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Converteren met een aangepaste indeling en de Duitse cultuur.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Converteren met het ISO 8601-patroon.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
